import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I tried to impress my date by cooking, so I ordered takeout, plated it, and set the plate on fire for authenticity.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
