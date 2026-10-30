# Week 7: Agents and workflows (~4 h)
**Domain 1** (all), **Domain 6** (Context Engineering: subagents)

- [ ] Read: "Building effective agents" (Anthropic engineering). Covers workflows vs agents, orchestrator-worker and evaluator-optimizer patterns
- [ ] Course: *Introduction to subagents*
- [ ] Docs: Agent SDK (TypeScript), including permissions, hooks, subagents and sessions; Managed Agents (self-hosted vs Anthropic-hosted)
- [ ] Skim: overviews of Strands and PydanticAI (where each one fits)
- [ ] **Build 6: Agent SDK research agent**. An orchestrator with one subagent (e.g. "summarize file X"). Add a `PreToolUse` hook that blocks writes outside one folder. Log the context size per turn
- [ ] **Build 7: LangGraph comparison**. Re-implement Build 4's tool loop in LangGraph.js, then write 5 bullets comparing it with the Agent SDK and with a hand-rolled loop
- [ ] **Checkpoint D:** Domain 1

[← Back to the study plan](../../study-plan.md)
