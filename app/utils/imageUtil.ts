// imageUtils.ts
"use server";
import fs from "fs-extra";

export async function readImagesFromDirectory(
  directoryPath: string
): Promise<string[]> {
  try {
    const files = await fs.readdir(directoryPath);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    return imageFiles.map((file) => `roofs/${file}`);
  } catch (err) {
    console.error("Error reading directory:", err);
    return [];
  }
}
