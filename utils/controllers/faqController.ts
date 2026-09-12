import FAQ from "../models/FAQ";
import { connectDB } from "../modules/db";

// ===============================
// GET ALL FAQs
// ===============================

export async function getFAQs() {
  await connectDB();

  const faqs = await FAQ.find()
    .sort({ order: 1, createdAt: 1 })
    .lean();

  return faqs;
}

// ===============================
// CREATE FAQ
// ===============================

export async function createFAQ(data: {
  question: string;
  answer: string;
  order: number;
}) {
  await connectDB();

  const requestedOrder = Math.max(1, data.order);

  // Find total FAQs
  const totalFAQs = await FAQ.countDocuments();

  // Don't allow an order bigger than the next available position
  const newOrder = Math.min(
    requestedOrder,
    totalFAQs + 1
  );

  // Shift existing FAQs down
  await FAQ.updateMany(
    {
      order: {
        $gte: newOrder,
      },
    },
    {
      $inc: {
        order: 1,
      },
    }
  );

  // Create new FAQ
  const faq = await FAQ.create({
    question: data.question,
    answer: data.answer,
    order: newOrder,
  });

  return faq;
}

// ===============================
// UPDATE FAQ
// ===============================

export async function updateFAQ(
  id: string,
  data: {
    question: string;
    answer: string;
    order: number;
  }
) {
  await connectDB();

  // Find current FAQ
  const currentFAQ = await FAQ.findById(id);

  if (!currentFAQ) {
    return null;
  }

  const oldOrder = currentFAQ.order;

  // Total FAQs
  const totalFAQs = await FAQ.countDocuments();

  // Keep order between 1 and total FAQs
  const newOrder = Math.min(
    Math.max(1, data.order),
    totalFAQs
  );

  // ===============================
  // ORDER DID NOT CHANGE
  // ===============================

  if (oldOrder === newOrder) {
    currentFAQ.question = data.question;
    currentFAQ.answer = data.answer;

    await currentFAQ.save();

    return currentFAQ;
  }

  // ===============================
  // MOVING DOWN
  // Example: 2 → 5
  // ===============================

  if (newOrder > oldOrder) {
    await FAQ.updateMany(
      {
        _id: {
          $ne: id,
        },
        order: {
          $gt: oldOrder,
          $lte: newOrder,
        },
      },
      {
        $inc: {
          order: -1,
        },
      }
    );
  }

  // ===============================
  // MOVING UP
  // Example: 5 → 2
  // ===============================

  if (newOrder < oldOrder) {
    await FAQ.updateMany(
      {
        _id: {
          $ne: id,
        },
        order: {
          $gte: newOrder,
          $lt: oldOrder,
        },
      },
      {
        $inc: {
          order: 1,
        },
      }
    );
  }

  // Update current FAQ
  currentFAQ.question = data.question;
  currentFAQ.answer = data.answer;
  currentFAQ.order = newOrder;

  await currentFAQ.save();

  return currentFAQ;
}

// ===============================
// DELETE FAQ
// ===============================

export async function deleteFAQ(id: string) {
  await connectDB();

  const faq = await FAQ.findById(id);

  if (!faq) {
    return null;
  }

  const deletedOrder = faq.order;

  // Delete FAQ
  await FAQ.findByIdAndDelete(id);

  // Close the gap
  // Example:
  // 1,2,3,4,5
  // Delete 3
  // becomes 1,2,4,5
  //
  // This changes it to:
  // 1,2,3,4

  await FAQ.updateMany(
    {
      order: {
        $gt: deletedOrder,
      },
    },
    {
      $inc: {
        order: -1,
      },
    }
  );

  return faq;
}