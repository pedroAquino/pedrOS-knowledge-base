# pedrOS knowledge base

Pedro's personal knowledge base: Markdown notes, one folder per topic. There's no build and no tests. The repo lives at https://github.com/pedroAquino/pedrOS-knowledge-base. Each topic folder's `README.md` is its entry point, so read that first.

## Topics

- `claude-certified-developer/`: study plan for the Claude Certified Developer – Foundations (CCDV-F) exam. Includes a small viewer site in `site/`.

## Writing notes

- Notes are a **map**: they say what to learn and where to find it. They don't teach the topic itself. Link to the source rather than summarising it.
- Write in plain, short sentences, the way the existing files do. Use tables for anything with more than one attribute and `- [ ]` checklists for actions to tick off.
- Put a date on anything that goes stale, e.g. "Checked 2026-10-26". When you change facts that come from outside (prices, links, course names, exam rules), check them against the source and update the date.
- Official Anthropic material is the source of truth. Mark third-party material as unofficial.

## claude-certified-developer/

- Some facts appear in more than one file. When you change one, change the others to match:
  - Sub-skill names and weights appear in `exam-blueprint.md`, the week files and `resources.md`. The names and weights come from the official exam guide v1.0.
  - Each sub-skill's **Week** column in `exam-blueprint.md` must match the week file that covers it.
  - The exam facts in `README.md` must match the exam guide.
- The plan is split: `study-plan.md` is the overview, and each week lives in `weeks/week-NN/week-NN.md` (two-digit `NN`). When you change a week's title or hours, update the week table in `study-plan.md` too.
- Pedro tracks progress by ticking `[x]` in the Markdown. This includes the `[ ]` cells in the blueprint tables and the score blanks (`____`).
- Builds are TypeScript only, even when a course uses Python.
- Real exam content ("dumps") never goes in these notes. Using it breaks the exam NDA.

### Viewer site (`site/index.html`)

The site loads `../study-plan.md`, the 10 week files, `../exam-blueprint.md` and `../resources.md` at runtime. Its parser depends on how those files are written:

- In `study-plan.md`, everything before the first `---` is the Overview page. After it, each `## ` heading becomes its own page.
- Each week file must start with a `# Week N: …` heading. That gives the page id `week-N`, and a trailing `(~X h)` is removed from the title. The number of weeks is set by `WEEKS` in the site's script.
- `- [ ]` list items, and table cells that hold only `[ ]` or `[x]`, become clickable checkboxes. Ticks made on the page last only for the session and are never saved back to the files.
- Links to any of those files (matched by filename) are turned into links to pages inside the site. To show a new Markdown file on the site, add it to `FILES` and `FILE_TO_PAGE` and to the `pages` list in `init()`.

To preview: from the repo root run `npx serve claude-certified-developer`, then open `/site/`. Opening the file directly with `file://` doesn't work, because the site needs to fetch the Markdown files.
