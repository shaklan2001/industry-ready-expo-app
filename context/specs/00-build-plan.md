# Build Plan

> Replace this with your full unit list before building. Generate using the
> prompt in `README copy.md` Part 3.

## Build Order

| Unit | Name | Depends On | Status |
|------|------|------------|--------|
| 01 | Theme migration — use `useTheme()` in all screens | ThemeContext | Pending |
| 02 | _(Your first feature)_ | 01 | Pending |
| 03 | _(Your second feature)_ | 02 | Pending |

## Unit 01 Preview

**Goal:** Replace hardcoded colors in Home and Settings screens with `useTheme()`.

**Verify when done:**
- [ ] No hex colors in `src/app/(app)/index.tsx` or `settings.tsx`
- [ ] Screens render identically to before
- [ ] `npm run type-check` passes

See `context/specs/01-theme-migration.md` for full spec.
