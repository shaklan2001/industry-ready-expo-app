# Industry Ready Expo App

[![npm version](https://img.shields.io/npm/v/industry-ready-expo-app.svg)](https://www.npmjs.com/package/industry-ready-expo-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready **Expo SDK 56** template with TypeScript, Expo Router, React Native Reanimated, a dark purple theme system, and a **six-file AI context system** for spec-driven development.

Create a new app in one command:

```bash
npx create-expo-app@latest MyApp --template industry-ready-expo-app
```

## Features

- **Expo SDK 56** — React Native 0.85, React 19, TypeScript 6
- **Expo Router v6** — file-based routing with typed routes
- **Native Tabs** — platform-native bottom tabs (SF Symbols on iOS, Material Icons on Android)
- **Vite-style welcome UI** — gradient hero, feature chips, glow orbs, and entrance animations on the Home screen
- **Reanimated 4** — `AnimatedButton`, `BouncingBall`, and layout entering animations
- **Theme system** — centralized tokens in `src/context/theme.ts` with `useTheme()` hook
- **Code quality** — ESLint, Prettier, and strict TypeScript out of the box
- **AI context system** — six markdown files in `context/` plus `AGENTS.md` for agent-guided development
- **Cross-platform** — iOS, Android, and web from one codebase

## Quick Start

### Using npx (recommended)

```bash
npx create-expo-app@latest MyApp --template industry-ready-expo-app
cd MyApp
npm start
```

### Using yarn

```bash
yarn create expo-app MyApp --template industry-ready-expo-app
cd MyApp
yarn start
```

### Manual clone

```bash
git clone https://github.com/shaklan2001/industry-ready-expo-app.git MyApp
cd MyApp
npm install
npm start
```

## What's in the Box

### Home screen

The Home tab is a polished welcome screen inspired by modern web starters (Vite-style):

- **Gradient background** with animated glow orbs (`expo-linear-gradient` + Reanimated)
- **Hero section** — logo badge, title, and subtitle
- **Feature chips** — TypeScript, ESLint, Prettier, Reanimated, Expo Router
- **Interactive demo card** — bouncing ball animation triggered by `AnimatedButton`
- **Developer credit** badge
- **Entrance animations** — `FadeInDown` / `FadeInUp` on scroll content

### Native tabs

| Tab | Screen | Description |
|-----|--------|-------------|
| Home | `src/app/(app)/index.tsx` | Welcome UI + Reanimated demo |
| Settings | `src/app/(app)/settings.tsx` | Placeholder settings screen |

Tab icons use SF Symbols on iOS and Material Icons on Android, tinted with the theme `primary` color.

### UI components

| Component | Path | Purpose |
|-----------|------|---------|
| `AnimatedButton` | `src/components/UI/AnimatedButton.tsx` | Primary button with spring press scale |
| `BouncingBall` | `src/components/UI/BouncingBall.tsx` | Reanimated bounce + scale sequence demo |
| `FeatureChip` | `src/components/UI/FeatureChip.tsx` | Pill badge for feature labels |
| `DeveloperCredit` | `src/components/UI/DeveloperCredit.tsx` | Footer attribution badge |

All components consume theme tokens via `useTheme()`.

## Project Structure

```
AGENTS.md                         # AI agent entry point

context/                          # AI-readable project docs (read before building)
├── project-overview.md           # Product goals, features, scope
├── architecture.md               # Stack, boundaries, storage, invariants
├── ui-context.md                 # Theme tokens, typography, UI rules
├── code-standards.md             # TypeScript and coding conventions
├── ai-workflow-rules.md          # Spec-driven workflow and scoping rules
├── progress-tracker.md           # Current phase, completed work, next steps
└── specs/                        # Feature specs (one unit at a time)
    ├── 00-build-plan.md
    └── 01-theme-migration.md

src/
├── app/
│   ├── _layout.tsx               # Root stack + ThemeProvider + dark nav theme
│   ├── index.tsx                 # Redirects to /(app)
│   └── (app)/
│       ├── _layout.tsx           # Native tabs layout
│       ├── index.tsx             # Home — welcome UI + demo
│       └── settings.tsx          # Settings tab
├── components/
│   └── UI/                       # Reusable presentational components
├── context/
│   ├── theme.ts                  # Design tokens (colors, spacing, typography, radius)
│   ├── ThemeContext.tsx          # ThemeProvider + useTheme()
│   └── index.ts
├── hooks/                        # Custom React hooks
├── services/                     # API clients and external integrations
└── types/                        # Shared TypeScript types
```

## Theme System

Design tokens live in `src/context/theme.ts` and are documented in `context/ui-context.md`.

```tsx
import { useTheme } from '../context';

export default function MyScreen() {
  const { colors, spacing, typography, radius } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        padding: spacing.lg,
        borderRadius: radius.lg,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: typography.fontSize.xl,
          fontWeight: typography.fontWeight.bold,
        }}
      >
        Hello
      </Text>
    </View>
  );
}
```

### Color palette

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#000000` | Screen backgrounds |
| `backgroundSecondary` | `#0F0F23` | Gradients, splash |
| `surface` | `#1a1a2e` | Cards, elevated surfaces |
| `primary` | `#d68dfa` | Buttons, tab tint, accents |
| `primarySoft` | `rgba(214, 141, 250, 0.12)` | Chip backgrounds |
| `primaryGlow` | `rgba(214, 141, 250, 0.35)` | Decorative glow orbs |
| `text` | `#ffffff` | Headings and body |
| `textSecondary` | `#cccccc` | Descriptions |
| `textMuted` | `#9ca3af` | Hints, captions |
| `border` | `#2a2a3e` | Dividers, card borders |

## AI Context System

This template ships with a **six-file context system** so AI coding agents stay aligned with your product, architecture, and design rules.

### Context files

| File | Purpose |
|------|---------|
| `project-overview.md` | What you're building, goals, scope, success criteria |
| `architecture.md` | Stack, folder boundaries, storage, invariants |
| `ui-context.md` | Colors, typography, spacing, component conventions |
| `code-standards.md` | TypeScript, naming, linting, patterns |
| `ai-workflow-rules.md` | Spec-driven workflow and scoping rules |
| `progress-tracker.md` | Current phase, done work, open questions |
| `specs/` | One spec per feature unit |

### Agent entry point

**`AGENTS.md`** at the project root tells agents to read all six context files in order before making changes. Add the same instructions to your own agent config (Cursor rules, Claude Code, Copilot, etc.).

### Getting started with AI

1. Edit `context/project-overview.md` with your app idea
2. Update `context/progress-tracker.md` with your current goal
3. Write a spec in `context/specs/` for the first feature unit
4. Prompt your agent:

```
Read context/specs/01-your-feature.md.
Update context/progress-tracker.md to mark this in progress.
Implement exactly as specified.
```

## Scripts

```bash
# Development
npm start                 # Start Expo dev server
npm run ios               # Run on iOS simulator
npm run android           # Run on Android emulator
npm run web               # Run in the browser

# Code quality
npm run lint              # Run ESLint
npm run lint:fix          # Auto-fix ESLint issues
npm run format            # Format with Prettier
npm run format:check      # Check formatting
npm run type-check        # TypeScript check (no emit)
npm run audit             # Dependency vulnerability scan
npm run audit:fix         # Apply safe audit fixes

# Production (requires EAS CLI)
npm run build:android     # EAS build for Android
npm run build:ios         # EAS build for iOS
npm run submit:android    # Submit Android build to store
npm run submit:ios        # Submit iOS build to store
```

## Customization

### Adding a new tab

1. Create a screen in `src/app/(app)/` (e.g. `profile.tsx`)
2. Register it in `src/app/(app)/_layout.tsx`:

```tsx
<NativeTabs.Trigger name="profile">
  {Platform.OS === 'ios' ? (
    <NativeTabs.Trigger.Icon
      sf={{ default: 'person', selected: 'person.fill' }}
    />
  ) : (
    <NativeTabs.Trigger.Icon
      src={
        <NativeTabs.Trigger.VectorIcon
          family={MaterialIcons}
          name="person"
        />
      }
    />
  )}
  <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
</NativeTabs.Trigger>
```

### Using Reanimated

Reanimated is pre-configured via `babel.config.js`. The bouncing ball demo shows `withSequence`, `withRepeat`, and `withTiming`:

```tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const translateY = useSharedValue(0);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ translateY: translateY.value }],
}));

translateY.value = withRepeat(
  withSequence(
    withTiming(-100, { duration: 300 }),
    withTiming(0, { duration: 300 }),
  ),
  1,
  false,
);
```

See `src/components/UI/BouncingBall.tsx` and `AnimatedButton.tsx` for full examples.

## Dependencies

### Runtime

| Package | Role |
|---------|------|
| `expo` ~56 | Build and runtime |
| `expo-router` ~56 | File-based navigation |
| `@expo/ui` ~56 | Native UI (SwiftUI / Jetpack Compose) |
| `expo-linear-gradient` | Gradient backgrounds on Home screen |
| `react-native-reanimated` 4 | Animations and layout transitions |
| `react-native-worklets` | Reanimated worklet support |
| `@expo/vector-icons` | Cross-platform icons |

### Dev tools

ESLint (React Native + TypeScript rules), Prettier, and TypeScript 6.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Run `npm run lint:fix && npm run format && npm run type-check`
4. Commit and push
5. Open a Pull Request

## Author

**Nishant Shaklan** — Full Stack & React Native Developer

- **Portfolio:** [nishantshaklan.co.in](https://www.nishantshaklan.co.in/)
- **GitHub:** [@shaklan2001](https://github.com/shaklan2001)

## License

MIT — see [LICENSE](LICENSE).

---

Built by [Nishant Shaklan](https://www.nishantshaklan.co.in/) · [GitHub](https://github.com/shaklan2001)
