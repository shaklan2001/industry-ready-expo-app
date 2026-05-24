# Code Standards

## TypeScript

- Strict mode enabled — no `any` unless explicitly justified
- Prefer `interface` for component props, `type` for unions and utilities
- Export types from `src/types/` when shared across modules
- Use explicit return types on hooks and service functions

## File & Naming

| Item | Convention | Example |
|------|------------|---------|
| Screens | `kebab-case` or descriptive name in `src/app/` | `settings.tsx` |
| Components | PascalCase file and export | `AnimatedButton.tsx` |
| Hooks | `use` prefix, camelCase | `useTheme.ts` |
| Services | camelCase | `apiClient.ts` |
| Constants | SCREAMING_SNAKE in dedicated files | `API_BASE_URL` |

## React Native Patterns

```tsx
// ✅ Use theme hook
const { colors, spacing, typography } = useTheme();

// ❌ Don't hardcode
backgroundColor: '#000000'
```

- Functional components only — no class components
- Co-locate `StyleSheet.create` at bottom of file
- Extract reusable UI to `src/components/UI/`
- Keep screens under ~150 lines; extract logic to hooks

## Expo Router

- Route groups in parentheses: `(app)/`, `(auth)/`
- `_layout.tsx` defines navigators for that segment
- Use `<Redirect />` for entry routing in `src/app/index.tsx`
- Tab config lives in `(app)/_layout.tsx` only

## Styling Rules

1. All colors from `useTheme().colors`
2. All spacing from `useTheme().spacing`
3. All font sizes from `useTheme().typography.fontSize`
4. Border radius from `useTheme().radius`

## Imports Order

1. React / React Native
2. Third-party libraries
3. Expo packages
4. Local aliases (`@/`, `../../components/`, etc.)

## Animation (Reanimated)

- Import from `react-native-reanimated` only
- Use `useSharedValue`, `useAnimatedStyle`, `withSpring`, `withTiming`
- Call `runOnJS` when bridging back to React state from worklets

## Linting & Formatting

```bash
npm run lint:fix    # Fix ESLint issues
npm run format      # Prettier write
npm run type-check  # TypeScript validation
```

Run all three before marking a unit complete.

## Files Not to Modify Without Explicit Instruction

- `ios/` and `android/` native projects (use `npx expo prebuild` when needed)
- `package-lock.json` (via npm commands only)
- Generated Expo config unless adding plugins

## New Feature Checklist

- [ ] Uses theme tokens
- [ ] Types defined for props and API responses
- [ ] No ESLint or TypeScript errors
- [ ] `context/progress-tracker.md` updated
- [ ] Relevant context file updated if patterns changed
