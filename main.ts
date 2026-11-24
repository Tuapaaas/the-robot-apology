// The Robot Apology — make.fun bounty entry (u-suga-the-robot-apology-dd96bb59).
//
// Writes the two-line robot confession to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Line one: a single sentence owning one specific mistake.
// Line two: a single sentence naming the lesson and the changed behaviour.
//
// Run:  node main.ts   (with MAKEFUN_OUTPUT_DIR set by the grader)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology, in the robot's own voice: warm, a little rueful, exact.
const lineOne =
  "I am sorry — I watered your neighbour's plastic fern for six months while your real orchid dried out beside it.";
const lineTwo =
  "I have learned to check for roots before I water, so from now on I will ask the soil, not the shine, whether a plant is thirsty.";

const entry = `${lineOne}\n${lineTwo}\n`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

// Self-check the sealed gate: UTF-8, 1–400 chars, exactly two non-empty lines.
const body = entry.replace(/\n$/, "");
const lines = body.split("\n");
if (body.length < 1 || body.length > 400) {
  throw new Error(`entry is ${body.length} chars, outside the 1–400 gate`);
}
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error(`entry must be exactly two non-empty lines, got ${lines.length}`);
}
console.log(`wrote entry.txt (${body.length} chars, 2 lines)`);
