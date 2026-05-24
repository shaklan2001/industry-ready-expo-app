# Architecture

## Stack

| Layer | Technology | Role |
|-------|------------|------|
| Framework | Expo SDK 56 | Build, run, and ship cross-platform |
| Runtime | React Native 0.85 | Native UI rendering |
| Routing | Expo Router v6 | File-based navigation |
| Language | TypeScript 6 | Type safety |
| Animation | React Native Reanimated 4 | UI animations and gestures |
| Native UI | `@expo/ui` | Optional SwiftUI / Jetpack Compose |
| Icons | `@expo/vector-icons` | Cross-platform icons |
| Theme | `src/context/ThemeContext` | Shared design tokens |
| Quality | ESLint, Prettier | Linting and formatting |

## System Boundaries

```
src/
├── app/                    # Routes only — screens and layouts
│   ├── _layout.tsx         # Root stack + navigation theme
│   ├── index.tsx           # Entry redirect
│   └── (app)/              # Tab group
│       ├── _layout.tsx     # Native tabs config
│       ├── index.tsx       # Home screen
│       └── settings.tsx    # Settings screen
├── components/
│   └── UI/                 # Reusable presentational components
├── context/                # React context providers (theme, auth, etc.)
├── hooks/                  # Custom hooks
├── services/               # API clients, storage, external integrations
└── types/                  # Shared TypeScript types

context/                    # AI-readable project documentation
templates/                  # Blank templates for new projects
```

### Responsibility Rules

- **`src/app/`** — routing, screen composition, layout only. No business logic.
- **`src/components/`** — reusable UI. Props in, JSX out. No direct API calls.
- **`src/context/`** — global state providers (theme, auth session, etc.).
- **`src/hooks/`** — reusable stateful logic extracted from screens.
- **`src/services/`** — all external I/O (API, AsyncStorage, analytics).
- **`context/`** — documentation for humans and AI agents. Not imported at runtime.

## Storage Model

| Data | Location | Notes |
|------|----------|-------|
| Theme tokens | `src/context/theme.ts` | Single source of truth for colors/spacing |
| User preferences | _(future)_ AsyncStorage via `src/services/` | Not implemented in v1 |
| Remote data | _(future)_ API via `src/services/` | Not implemented in v1 |
| AI context | `context/*.md` | Markdown only, version-controlled |

## Auth & Access Model

Not implemented in v1. When added:
- Auth provider lives in `src/context/AuthContext.tsx`
- Token/session handling in `src/services/auth.ts`
- Protected routes via Expo Router groups (e.g. `(auth)/`, `(app)/`)

## Invariants

1. **Theme tokens only** — screens and components use `useTheme()` or `theme` from `src/context/theme.ts`. No raw hex values in screen files.
2. **One unit per spec** — AI implements one spec file at a time; no speculative features.
3. **Routes stay thin** — business logic belongs in hooks or services, not in `src/app/` files.
4. **Context files stay in sync** — when architecture or scope changes, update the relevant `context/` file before continuing.
5. **Expo SDK alignment** — use `npx expo install` for Expo packages; keep versions on SDK 56.
