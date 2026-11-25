import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I tried to impress my date by cooking, so I ordered takeout, plated it, and set the plate on fire. Flambé.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
