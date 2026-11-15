// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency — the power to choose and to act, and to take it back — to
// /output/entry.txt. Deterministic: the same bytes on every run, no network,
// no clock, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The agent offers three polished birthday cards',
  'for my sister, each warm, each finished in a breath.',
  "I read them beside the kettle's click",
  'and take the blank card from the drawer.',
  '',
  'It knows her better than I do in some ways —',
  'the dates, the jokes, the clean turn of a sentence.',
  'My hand knows none of that. It stalls.',
  'I write, You taught me how to swim,',
  'then cross out swim; it sounds too large.',
  'I write, I still look for you in the grocery aisle.',
  'That stays.',
  '',
  'The letters lean. The ink pools at the y.',
  'It will take all evening. It will be crooked.',
  'It will be mine — one uneven line at a time,',
  'my thumbprint drying beside her name.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
