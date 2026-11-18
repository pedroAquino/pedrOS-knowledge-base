# Projects

TypeScript scripts and builds for the study plan. There's one folder per week, matching [`../weeks/`](../weeks/). Set up 2026-11-18.

## Setup

Run every command from this folder (`cd claude-certified-developer/projects`), not from the repo root.

- [ ] Node 22 or newer (`node --version`)
- [ ] `npm install`
- [ ] `cp .env.example .env`, then paste your API key from the [Claude Console](https://platform.claude.com/settings/keys). `.env` is git-ignored.
- [ ] `npm start week-01/hello.ts` should print `ANTHROPIC_API_KEY loaded from .env: true`

## Commands

| Command | What it does |
|---|---|
| `npm start week-NN/file.ts` | Runs one file with `tsx`. Loads `.env` |
| `npm run dev week-NN/file.ts` | Same, but re-runs when a file changes |
| `npm run typecheck` | Type-checks every `week-*` folder with `tsc` |

## Where things go

- A quick script is a single file: `week-NN/some-test.ts`.
- A build gets its own folder: `week-NN/build-1-streaming-chat/`, with an `index.ts` as the entry point.
- Shared dependencies go in this folder's `package.json` (`npm install <pkg>`). Give a build its own `package.json` only if it really needs to be separate.
- There's no build step. `tsx` runs the `.ts` files directly, and `tsc` only checks types.
