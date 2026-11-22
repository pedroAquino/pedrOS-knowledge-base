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

The CCDV-F topic has a small site that renders the plan with clickable checkboxes. Its one canonical address is **http://ccdv.localhost:4747/site/**. Don't start other servers or ports for it.

A systemd user service, `ccdv-site.service` (in `~/.config/systemd/user/`, not in this repo), serves `claude-certified-developer/` on port 4747. It reads the files from disk on every request, so edits show after a page reload, with no restart. If the site is down:

```sh
systemctl --user restart ccdv-site.service
```

Opening the HTML file directly doesn't work, because the site fetches the Markdown files.

## Working with agents

[`AGENTS.md`](AGENTS.md) has the writing rules for AI agents that edit these notes. `CLAUDE.md` points to it.
