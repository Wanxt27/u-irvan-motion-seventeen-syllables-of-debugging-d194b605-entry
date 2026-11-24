// Seventeen Syllables of Debugging — make.fun entry (Node 22, stdlib only).
// Writes one original 5-7-5 haiku about debugging to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in
// for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const HAIKU = [
  'Breakpoint holds its breath', // Break-point(2) holds its breath = 5
  'log line swears no crash happened', // log line swears no crash hap-pened(2) = 7
  'the bug wore my face', // the bug wore my face = 5
].join('\n'); // 17 syllables, 82 characters, no trailing newline

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), HAIKU, 'utf8');
