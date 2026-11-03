const MAX_IMAGE_BYTES = 2 * 1024 * 1024;
const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];

export async function prepareEventImage(file: File): Promise<string> {
  if (!TYPES.includes(file.type)) throw new Error("Choose a PNG, JPEG, WebP or GIF image.");
  if (file.size > MAX_UPLOAD_BYTES) throw new Error("Choose an image under 10 MB.");
  const data = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Unable to read this image. Please select it again."));
    reader.readAsDataURL(file);
  });
  const image = new Image();
  image.src = data;
  try { await image.decode(); } catch { throw new Error("This image could not be opened. Try another image."); }
  if (file.size <= MAX_IMAGE_BYTES) return data;
  const scale = Math.min(1, 1920 / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Unable to prepare image. Please choose an image under 2 MB.");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  for (const quality of [0.85, 0.7, 0.5]) {
    const result = canvas.toDataURL("image/webp", quality);
    if (result.length <= 2800000) return result;
  }
  throw new Error("This image is still too large. Please choose a smaller image.");
}
