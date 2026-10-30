# Week 5: Tool use (~3.5 h)
**Domain 8** (Tool Implementation), **Domain 2** (API Mechanics: tools)

- [ ] Course: *Building with the Claude API*, tool-use modules
- [ ] Docs: tool use overview, client vs server tools (web search, code execution and so on), parallel tool calls, the tool runner, writing good tool descriptions
- [ ] Read: Anthropic engineering post on writing tools for agents
- [ ] Learn: how tools are dispatched in the agent loop, returning tool errors, approval patterns (asking the user before running a tool), designing a tool set (how many tools, naming, how detailed results should be)
- [ ] **Build 4: hand-rolled tool loop**. Write a weather and unit-converter assistant **without** the tool runner: your own while-loop, `tool_use` and `tool_result` handling, tool errors returned to the model, and a y/n approval step before one "dangerous" tool

[← Back to the study plan](../../study-plan.md)
