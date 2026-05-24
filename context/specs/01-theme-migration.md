# Unit 01: Theme Migration

## Goal

Replace hardcoded color values in Home and Settings screens with `useTheme()`
from `src/context/ThemeContext.tsx`, matching `context/ui-context.md` tokens.

## Design

- No visual changes — pixel-identical to current dark + purple theme
- Use `colors.background`, `colors.text`, `colors.textSecondary`, `colors.primary`
- Use `typography.fontSize` and `spacing.lg` for margins

## Implementation

### Home Screen (`src/app/(app)/index.tsx`)

- Import `useTheme`
- Replace `#000000` → `colors.background`
- Replace `#ffffff` → `colors.text`
- Replace `#cccccc` → `colors.textSecondary`
- Use theme spacing for padding

### Settings Screen (`src/app/(app)/settings.tsx`)

- Same token replacements as Home
- Title: `typography.fontSize['2xl']`
- Subtitle: `colors.primary`

### Tab Layout (`src/app/(app)/_layout.tsx`)

- Replace hardcoded `#d68dfa` with `theme.colors.primary` from import
  (layout files may import `theme` directly — no hook needed)

## Dependencies

None — ThemeContext already exists.

## Verify when done

- [ ] No raw hex in screen style objects (except `theme.ts`)
- [ ] Home and Settings look unchanged
- [ ] Tab tint still purple
- [ ] `npm run lint` passes
- [ ] `npm run type-check` passes
- [ ] `progress-tracker.md` updated
