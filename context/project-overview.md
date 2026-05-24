# Project Overview

> Starter context for this Expo template. Replace product-specific sections
> with your own app idea before building.

## Overview

Industry Ready Expo App is a cross-platform mobile starter built with Expo SDK 56,
TypeScript, Expo Router, and React Native Reanimated. It gives vibe coders and
AI-assisted developers a production-ready foundation — routing, tabs, animations,
linting, and a documented context system — so they can focus on their product
instead of boilerplate.

## Goals

1. Ship a working iOS, Android, and web app from one codebase
2. Keep AI-assisted development consistent via the six-file context system
3. Use typed, linted, formatted code from day one
4. Demonstrate Reanimated patterns with reusable UI components
5. Support Expo UI (SwiftUI / Jetpack Compose) when native UI is needed

## Core User Flow

1. User opens the app and lands on the Home tab
2. User taps "Bounce the Ball!" to trigger the demo animation
3. User switches to the Settings tab via native bottom tabs
4. _(Your app)_ Extend this flow with your product's core value

## Features

### Navigation
- Expo Router file-based routing
- Native tabs (Home, Settings)
- Stack layout for landing redirect

### UI & Animation
- Dark theme with purple accent
- `AnimatedButton` with press scale effect
- `BouncingBall` demo with Reanimated sequences
- Theme tokens in `src/context/theme.ts`

### Developer Experience
- TypeScript strict mode
- ESLint + Prettier
- Six-file AI context system in `context/`
- Blank templates in `templates/` for new projects

## In Scope (v1)

- File-based routing and native tabs
- Reanimated demo components
- Theme context and documented design tokens
- AI context files and spec workflow
- Expo SDK 56 compatibility

## Out of Scope (v1)

- Authentication and user accounts
- Backend API integration
- Push notifications
- Offline sync
- App Store / Play Store submission automation
- Custom native modules beyond Expo SDK

## Success Criteria

- [ ] App runs on iOS simulator, Android emulator, and web without errors
- [ ] `npm run lint`, `npm run type-check`, and `npm run format:check` pass
- [ ] Home tab animation works on press
- [ ] Native tabs navigate between Home and Settings
- [ ] All screens use theme tokens (no hardcoded colors outside `theme.ts`)
- [ ] Context files reflect the actual codebase after customization
