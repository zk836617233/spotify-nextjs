import { createCanvas, loadImage } from "canvas";

async function getBackgroundColor(imageUrl: string) {
  // Load the image
  const img = await loadImage(imageUrl);

  // Create a canvas with the same dimensions as the image
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");

  // Draw the image onto the canvas
  ctx.drawImage(img, 0, 0);

  // Get the image data from the canvas
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Calculate the average color of the image
  let r = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }
  const pixels = data.length / 4;
  const avgR = Math.round(r / pixels);
  const avgG = Math.round(g / pixels);
  const avgB = Math.round(b / pixels);

  // Return the average color as a string in hex format
  return `#${avgR.toString(16)}${avgG.toString(16)}${avgB.toString(16)}`;
}

// Usage
getBackgroundColor("image.jpg").then((color) => {
  console.log(color);
});
