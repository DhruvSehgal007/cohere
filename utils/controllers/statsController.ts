import Stats from "../models/Stats";
import { connectDB } from "../modules/db";

export async function getStats() {
  await connectDB();

  const stats = await Stats.find()
    .sort({ order: 1 })
    .lean();

  return stats;
}

export async function createStat(data: {
  value: number;
  suffix: string;
  label: string;
  order: number;
}) {
  await connectDB();

  const stat = await Stats.create({
    value: data.value,
    suffix: data.suffix,
    label: data.label,
    order: data.order,
  });

  return stat;
}

export async function updateStat(
  id: string,
  data: {
    value: number;
    suffix: string;
    label: string;
    order: number;
  }
) {
  await connectDB();

  const stat = await Stats.findByIdAndUpdate(
    id,
    {
      value: data.value,
      suffix: data.suffix,
      label: data.label,
      order: data.order,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return stat;
}

export async function deleteStat(id: string) {
  await connectDB();

  const stat = await Stats.findByIdAndDelete(id);

  return stat;
}