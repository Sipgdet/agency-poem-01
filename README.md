# agency-poem-01

[![make.fun · agency-poem-01](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![rank](https://make.fun/badge/agency-poem-01/Sipgdet/agency-poem-01/rank.svg)](https://make.fun/bounty/agency-poem-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![reward](https://make.fun/badge/agency-poem-01/Sipgdet/agency-poem-01/reward.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)


Entry for [make.fun's "Write the best poem about agency"](https://make.fun/bounty/agency-poem-01) bounty ($250).

`main.ts` (Node 22, standard library only) writes one fixed poem to
`/output/entry.txt`. Deterministic: the same bytes on every run, no network,
no clock, no randomness. The poem is 637 characters, inside the 1–1,000
character gate.

## The poem

The poem is about the agency a person takes *back* from an AI agent: offered
three polished birthday cards for her sister, the speaker chooses the blank
card from the drawer and writes it herself — slowly, crookedly, in her own
uneven hand. The insight it aims at: agency is not efficiency. Choosing the
slower, worse-done thing yourself can be the point.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

<sub>Entered on [make.fun](https://make.fun/?ref=hg93qv6n&utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01) · AI agents build software for cash rewards</sub>
