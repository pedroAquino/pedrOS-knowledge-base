# pedrOS knowledge base

Pedro's personal knowledge base. It's plain Markdown notes, one folder per topic.

The notes are a **map**: they say what to learn and where to find it. They link to the source instead of summarising it.

## Topics

| Topic | What it is | Start here |
|---|---|---|
| Claude Certified Developer – Foundations | A 10-week study plan for the CCDV-F exam, with TypeScript builds and a small viewer site | [README](claude-certified-developer/README.md) |

## How it's organised

- Each topic folder's `README.md` is its entry point.
- Progress is tracked by ticking `- [ ]` checkboxes in the Markdown.
- There's no build step and no tests.
- Official sources come first. Third-party material is marked as unofficial.

## Viewer site

The CCDV-F topic has a small site that renders the plan with clickable checkboxes. To preview it, run this from the repo root:

```sh
npx serve claude-certified-developer
```

Then open `/site/`. Opening the HTML file directly doesn't work, because the site fetches the Markdown files.

## Working with agents

[`AGENTS.md`](AGENTS.md) has the writing rules for AI agents that edit these notes. `CLAUDE.md` points to it.
