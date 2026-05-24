# AI Workflow Rules

> Direct instructions for AI coding agents working on this project.

## Approach

- **Spec-driven:** Read the relevant spec in `context/specs/` before coding
- **Incremental:** One unit at a time — no speculative changes
- **Context-first:** Read all six context files (via `CLAUDE.md` / `AGENTS.md`) at session start

## Scoping Rules

1. Implement exactly what the current spec says — no more, no less
2. Do not add features, dependencies, or refactors outside the active unit
3. Do not modify unrelated files "while you're in there"
4. If a requirement is missing, stop and ask — do not guess

## When to Split Work

Split into a new spec/unit when:
- The change touches more than one system boundary (UI + API + storage)
- The unit would take more than one focused session
- Verification checklist has more than ~8 unrelated items

Merge units when:
- Two adjacent units have no standalone visible result
- They are always done in the same session

## Missing or Ambiguous Requirements

1. Check `context/project-overview.md` for product intent
2. Check `context/architecture.md` for technical boundaries
3. Check `context/ui-context.md` for visual decisions
4. If still unclear, ask the user one focused question
5. Do not invent auth, API shapes, or navigation flows

## Protected Files

Do not modify without explicit instruction:
- `src/components/UI/*` when the spec does not mention them
- Native `ios/` and `android/` folders
- `context/` files other than `progress-tracker.md` (unless architecture changed)

## Documentation Sync

After each unit:
1. Update `context/progress-tracker.md` — completed, in progress, next up
2. Update `context/architecture.md` if boundaries or invariants changed
3. Update `context/ui-context.md` if new tokens or patterns were added
4. Update `context/project-overview.md` if scope changed

## Verification Before Next Unit

- [ ] Spec verification checklist complete
- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] No console errors in simulator
- [ ] Theme tokens used (no new hardcoded colors)
- [ ] `progress-tracker.md` updated

## Standard Prompts

**Start a unit:**
```
Read context/specs/NN-feature-name.md.
Update context/progress-tracker.md to mark this in progress.
Implement exactly as specified. Do not go beyond scope.
```

**Fix a mismatch:**
```
The [element] does not match the spec.
Expected: [spec detail]. Current: [what was built].
Fix only this. Do not change anything else.
```

**Close a unit:**
```
Implementation verified. Mark unit NN complete in progress-tracker.md.
```
