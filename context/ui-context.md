# UI Context

> Design system for this template. AI agents must use these tokens — never invent colors.

## Aesthetic

- **Mode:** Dark
- **Feel:** Modern, minimal, developer-focused
- **Accent:** Soft purple (`primary`)
- **Background:** Pure black with deep navy splash (`#0F0F23`)

## Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#000000` | Screen backgrounds |
| `backgroundSecondary` | `#0F0F23` | Splash, adaptive icon bg |
| `surface` | `#1a1a2e` | Cards, elevated surfaces |
| `text` | `#ffffff` | Primary headings and body |
| `textSecondary` | `#cccccc` | Subtitles, descriptions |
| `textMuted` | `#9ca3af` | Disabled text, hints |
| `primary` | `#d68dfa` | Buttons, tab tint, accents |
| `primaryDisabled` | `#9ca3af` | Disabled buttons |
| `border` | `#2a2a3e` | Dividers, input borders |
| `error` | `#ef4444` | Error states |
| `success` | `#22c55e` | Success states |
| `warning` | `#f59e0b` | Warning states |

**Runtime source:** `src/context/theme.ts`  
**React hook:** `useTheme()` from `src/context/ThemeContext.tsx`

## Typography

| Style | Size | Weight | Color | Usage |
|-------|------|--------|-------|-------|
| Screen title | 28 | bold | `text` | Settings title |
| Section title | 24 | bold | `text` | Home title |
| Subtitle | 18 | semibold | `primary` | Accent subtitles |
| Body | 16 | normal | `textSecondary` | Descriptions |
| Button | 16 | semibold | `text` | Button labels |
| Caption | 14 | normal | `textMuted` | Hints, metadata |

## Spacing Scale

| Token | Value |
|-------|-------|
| `xs` | 4 |
| `sm` | 8 |
| `md` | 16 |
| `lg` | 24 |
| `xl` | 32 |
| `2xl` | 48 |

**Screen padding:** `paddingHorizontal: 24`, `paddingVertical: 20`

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4 | Small chips |
| `md` | 8 | Buttons (default) |
| `lg` | 12 | Cards |
| `xl` | 16 | Modals |
| `full` | 9999 | Pills, avatars |

## Component Conventions

### Buttons
- Use `AnimatedButton` from `src/components/UI/AnimatedButton.tsx`
- Primary fill: `primary`, text: `text`, radius: `md`
- Press animation: scale to 0.95 via Reanimated spring
- Min width: 200, padding: 24h × 12v

### Layout
- Screens: `flex: 1`, centered content, `background` color
- Max text width for readability: ~300px on centered copy

### Navigation
- Native tabs tint: `primary` (`#d68dfa`)
- iOS: SF Symbols via `NativeTabs.Trigger.Icon`
- Android: Material Icons via `@expo/vector-icons`

### Animation
- Use Reanimated (`withSpring`, `withTiming`, `withSequence`)
- Shared values for transforms; avoid animating layout when possible

## Icons

- **Library:** `@expo/vector-icons`
- **iOS tabs:** SF Symbols (`house`, `house.fill`, `gear`)
- **Android tabs:** MaterialIcons (`home`, `settings`)

## Do Not

- Hardcode hex colors in screen or component files
- Mix light and dark patterns in the same screen
- Use inline magic numbers for spacing — use theme tokens
- Create new button styles without updating this file first
