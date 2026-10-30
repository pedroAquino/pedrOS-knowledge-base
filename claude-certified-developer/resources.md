# Resources

Checked 2026-10-26. No single course covers the whole CCDV-F blueprint, and Anthropic says no required course exists. So the approach is **official courses and docs for each topic, plus community and paid practice questions**.

## 1. Official, free

### Exam guide
- **CCDV-F Exam Guide v1.0** ([PDF](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1783542875/Claude+Certified+Developer+%E2%80%93+Foundations+Exam+Guide.pdf)). This is the blueprint, and it includes 3 sample questions. Once you have Partner Academy access, get the current version from there.
- **Anthropic Partner Academy** ([anthropic-partners.skilljar.com](https://anthropic-partners.skilljar.com)). Exam registration and partner-only material. Needs the Smaply partner signup.
- **Pearson VUE, Anthropic program** ([pearsonvue.com/us/en/anthropic.html](https://pearsonvue.com/us/en/anthropic.html)). Scheduling and support.

### Anthropic Academy (public courses, free) at [anthropic.skilljar.com](https://anthropic.skilljar.com)

| Course | Blueprint coverage | Week |
|---|---|---|
| Claude Platform 101 | LLM fundamentals, model options, platform overview | 1 |
| AI Capabilities and Limitations | LLM fundamentals (optional, short) | 1 |
| Building with the Claude API | API mechanics, prompting, tool use, caching, evals, RAG, agents and workflows (**the main course**) | 2–5 |
| Introduction to Model Context Protocol | MCP server development, resources, tools and prompts | 6 |
| Model Context Protocol: Advanced Topics | MCP transports, sampling, notifications | 6 |
| Introduction to agent skills | Skills, agentic customization | 6 |
| Introduction to subagents | Subagents, context isolation | 7 |
| Claude Code in Action | Claude Code operation, hooks, headless mode, configuration | 8 |
| Claude with Amazon Bedrock / Claude on Google Cloud | Calling Claude through third-party vendors (skim one) | 3 |

> The courses use Python in places. Watch them for the concepts, then do the builds in TypeScript.

### Anthropic docs ([docs.claude.com](https://docs.claude.com))
Use the docs as the reference for every sub-skill. The sections that matter most:
- **Models overview, choosing a model, pricing, model deprecations and migration guides.** Covers model selection and breaking changes.
- **Messages API, streaming, vision, extended and adaptive thinking, effort, errors and rate limits.** Covers API mechanics and debugging.
- **Prompt caching, Message Batches API, token counting.** Covers cost and token management.
- **Structured outputs, tool use (client and server tools), the MCP connector.** Covers output handling and tools.
- **Prompt engineering guide, context windows, context management and compaction.** Covers prompt and context engineering.
- **Agent SDK (TypeScript), hooks, subagents, Managed Agents.** Covers agent construction.
- **Claude Code docs (settings, memory/CLAUDE.md, skills, hooks, plugins, headless mode).** Covers Claude Code operation and configuration management.
- **Guardrails: reducing prompt injection and jailbreaks, keeping Claude in character, preventing data leakage.** Covers security.
- **Test and evaluate: define success criteria, build evals.** Covers evals.

### Other official
- **Anthropic Cookbook** ([github.com/anthropics/anthropic-cookbook](https://github.com/anthropics/anthropic-cookbook)). Recipes for tool use, caching, batch, evals and agents.
- **Anthropic engineering blog** ([anthropic.com/engineering](https://www.anthropic.com/engineering)). "Building effective agents" covers workflows vs agents. Also read the posts on context engineering, writing tools for agents, and the Agent SDK.
- **MCP specification and TypeScript SDK** ([modelcontextprotocol.io](https://modelcontextprotocol.io)). Covers MCP server development and transports.

## 2. Community, free (unofficial)

| Resource | What it gives you | Use |
|---|---|---|
| [Amey-Thakur/CLAUDE-CERTIFICATIONS](https://github.com/Amey-Thakur/CLAUDE-CERTIFICATIONS) (`developer-foundations/`) | Study notes, practice questions, 3 mock exams, cheat sheet, flashcards. MIT license | Checkpoint quizzes for each block, plus extra mocks |
| [Tutorials Dojo free CCDV-F sampler](https://portal.tutorialsdojo.com/courses/free-claude-certified-developer-foundations-ccdv-f-practice-exams-sampler/) | 20 questions, timed and review modes | **Week 1 diagnostic** |
| [claudecertificationguide.com/ccdv-f](https://claudecertificationguide.com/ccdv-f) | Blueprint summary and lesson outline | Optional second opinion |
| [dev.to: experience report](https://dev.to/mjmirza/i-researched-anthropics-claude-certifications-for-a-week-before-applying-and-the-exam-is-the-easy-4in9) | What registration and prep look like in practice, and pitfalls | Read once |

## 3. Paid (pick **one**, for weeks 9–10)

| Option | Notes |
|---|---|
| [Tutorials Dojo CCDV-F Practice Exams](https://portal.tutorialsdojo.com/product/claude-certified-developer-foundations-ccdv-f-practice-exams/) | Timed, review, section-based and random modes, with explanations, references and flashcards. 1 year of access. **Recommended**: the section-based mode helps you drill weak domains |
| [Udemy: CCDV-F 6 Practice Exams](https://www.udemy.com/course/ccdv-f-claude-developer-foundations-6-practice-exams/) | 318 questions, 6 × 53-item timed mocks. Wait for a Udemy sale (~$15) |
| [Udemy: CCDV-F Practice Exams](https://www.udemy.com/course/claude-developer-foundations-practice-exams/) | 212 questions, 4 exams, 4.5★ from about 200 ratings |

Before buying, check the last-updated date on the listing (it should be after July 2026) and recent reviews. All of these are unofficial.

## 4. Third-party agent frameworks (for the LangGraph build in week 7)
- **LangGraph.js** ([docs](https://langchain-ai.github.io/langgraphjs/)). Used for the comparison build.
- **Strands Agents** ([strandsagents.com](https://strandsagents.com)) and **PydanticAI** ([ai.pydantic.dev](https://ai.pydantic.dev)). Read the overviews only, so you know where each one fits.
