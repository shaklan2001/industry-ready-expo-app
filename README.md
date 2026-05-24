# Industry Ready Expo App Setup

A production-ready Expo React Native application with modern architecture, TypeScript, ESLint, Prettier, React Native Reanimated, and industry-standard best practices.

## ✨ Features

- 🚀 **Expo Router v6** with file-based routing
- 📱 **Native Tabs** with cross-platform icons (iOS SF Symbols + Android Material Icons)
- 📝 **TypeScript** for type safety
- 🏗️ **Industry-standard file structure** with organized components, hooks, and services
- 🎨 **ESLint & Prettier** for code quality and formatting
- ⚡ **React Native Reanimated** for smooth animations
- 📦 **Ready for production** with proper configuration
- 🎯 **Cross-platform** - works on iOS, Android, and Web
- 🛡️ **Code Quality Tools** - Linting, formatting, and type checking
- 🤖 **AI Context System** - Six-file context for vibe coding and AI-assisted development

## 🚀 Quick Start

### Option 1: Using npx (Recommended)

```bash
npx create-expo-app@latest MyApp --template industry-ready-expo-app
```

### Option 2: Using yarn

```bash
yarn create expo-app MyApp --template industry-ready-expo-app
```

### Option 3: Manual Installation

```bash
# Clone the template
git clone https://github.com/shaklan2001/industry-ready-expo-app.git MyApp
cd MyApp

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm start
# or
yarn start
```

## 📁 Project Structure

```
context/                     # AI-readable project docs (read before building)
├── project-overview.md      # Product goals, features, scope
├── architecture.md          # Stack, boundaries, invariants
├── ui-context.md            # Theme tokens, typography, UI rules
├── code-standards.md        # TypeScript and coding conventions
├── ai-workflow-rules.md     # How AI agents should work on this repo
├── progress-tracker.md      # Current phase, completed work, next steps
└── specs/                   # Feature specs (one unit at a time)

templates/                   # Blank context templates for new projects
├── CLAUDE.md
├── project-overview.md
├── architecture.md
├── ui-context.md
├── code-standards.md
├── ai-workflow-rules.md
├── progress-tracker.md
└── specs/
    └── unit-template.md

CLAUDE.md                    # AI entry point (Claude Code)
AGENTS.md                    # AI entry point (Codex / Copilot)

src/
├── app/
│   ├── _layout.tsx          # Root layout with Stack navigator
│   ├── index.tsx            # Landing page
│   └── (app)/               # Main app group
│       ├── _layout.tsx      # Native tabs layout
│       ├── index.tsx        # Home tab with bouncing ball demo
│       └── settings.tsx     # Settings tab
├── components/
│   └── UI/                  # Reusable UI components
│       ├── AnimatedButton.tsx    # Animated button with scale effect
│       └── BouncingBall.tsx      # Bouncing ball animation component
├── context/                 # Runtime React context
│   ├── theme.ts             # Design tokens (colors, spacing, typography)
│   ├── ThemeContext.tsx     # ThemeProvider + useTheme()
│   └── index.ts
├── hooks/                   # Custom React hooks
├── services/                # API services and utilities
└── types/                   # TypeScript type definitions
```

## 🤖 AI Context System

This template includes the **Six-File Context System** for building with AI without drift. Your coding agent reads these files at the start of every session so it knows your product, architecture, theme, and rules.

### Context files (`context/`)

| File | Purpose |
|------|---------|
| `project-overview.md` | What you're building, goals, scope, success criteria |
| `architecture.md` | Stack, folder boundaries, storage, invariants |
| `ui-context.md` | Colors, typography, spacing, component conventions |
| `code-standards.md` | TypeScript, naming, linting, patterns |
| `ai-workflow-rules.md` | Spec-driven workflow and scoping rules |
| `progress-tracker.md` | Current phase, done work, open questions |
| `specs/` | One spec per feature unit |

### Entry points

- **`CLAUDE.md`** — read by Claude Code
- **`AGENTS.md`** — read by Codex, GitHub Copilot, and other agents

Both files tell the agent to read the six context files in order before making changes.

### Theme: docs + code

- **`context/ui-context.md`** — design rules for humans and AI
- **`src/context/theme.ts`** — runtime tokens used in components
- **`useTheme()`** — hook from `src/context/ThemeContext.tsx`

```tsx
import { useTheme } from '../context';

export default function MyScreen() {
  const { colors, spacing, typography } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background, padding: spacing.lg }}>
      <Text style={{ color: colors.text, fontSize: typography.fontSize.xl }}>
        Hello
      </Text>
    </View>
  );
}
```

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

### Blank templates (`templates/`)

Starting a new idea? Copy `templates/` into a `context/` folder, fill in the blanks using prompts from [`README copy.md`](README%20copy.md) (the full AI-driven developer playbook), and add `CLAUDE.md` to your project root.

## 🎨 What's Included

### Interactive Demo
- **Bouncing Ball Animation**: Click the "Bounce the Ball!" button to see a realistic bouncing ball with decreasing height and scale effects
- **Animated Button**: Press effects with smooth scale animations using React Native Reanimated

### Native Tabs
- **Home Tab**: Interactive demo screen with bouncing ball animation
- **Settings Tab**: Settings and configuration screen
- **Cross-platform icons**: SF Symbols on iOS, Material Icons on Android

### Development Tools
- **TypeScript** configuration with strict type checking
- **ESLint** with React Native and TypeScript rules
- **Prettier** for consistent code formatting
- **React Native Reanimated** properly configured with worklets

## 🛠️ Available Scripts

```bash
# Development
npm start                 # Start development server
npm run ios              # Run on iOS simulator
npm run android          # Run on Android emulator
npm run web              # Run on web

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # Run TypeScript type checking
npm run audit            # Check dependency vulnerabilities
npm run audit:fix        # Apply safe audit fixes

# Building
npm run build:android    # Build for Android
npm run build:ios        # Build for iOS
```

## 🛠️ Customization

### Adding New Tabs

1. Create a new file in `src/app/(app)/` (e.g., `profile.tsx`)
2. Add the tab trigger in `src/app/(app)/_layout.tsx`:

```tsx
<NativeTabs.Trigger name='profile'>
  {Platform.OS === 'ios' ? (
    <Icon sf={{ default: 'person', selected: 'person.fill' }} />
  ) : (
    <Icon src={<VectorIcon family={MaterialIcons} name="person" />} />
  )}
  <Label>Profile</Label>
</NativeTabs.Trigger>
```

### Using React Native Reanimated

The project comes with Reanimated pre-configured. Example usage from the bouncing ball component:

```tsx
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming,
  withRepeat,
  withSequence 
} from 'react-native-reanimated';

export default function BouncingBall() {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  const startAnimation = () => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-100, { duration: 300 }),
        withTiming(0, { duration: 300 }),
        // ... more animation steps
      ),
      1,
      false
    );
  };

  return (
    <Animated.View style={[styles.ball, animatedStyle]} />
  );
}
```

### Creating Custom Animated Components

Use the included `AnimatedButton` component as a template:

```tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function MyAnimatedComponent() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(0.95);
    // Your animation logic here
  };

  return (
    <Animated.View style={animatedStyle}>
      {/* Your component content */}
    </Animated.View>
  );
}
```

## 📱 Running the App

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web
npm run web
```

## 🚀 Building for Production

```bash
# Build for Android
npm run build:android

# Build for iOS
npm run build:ios
```

## 📦 Dependencies

### Core
- **Expo Router v6**: File-based routing
- **React Native**: Cross-platform mobile development
- **TypeScript**: Type safety and better developer experience

### UI & Navigation
- **Native Tabs**: Platform-native tab navigation
- **Vector Icons**: Cross-platform icons

### Animation & Performance
- **React Native Reanimated**: Smooth animations with worklets
- **React Native Worklets**: Performance optimization for animations

### Development Tools
- **ESLint**: Code linting with React Native and TypeScript rules
- **Prettier**: Code formatting
- **TypeScript**: Static type checking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Run linting and formatting (`npm run lint:fix && npm run format`)
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [React Navigation](https://reactnavigation.org/) for navigation
- [Expo Router](https://expo.github.io/router/) for file-based routing
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for smooth animations

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [Expo documentation](https://docs.expo.dev/)
- Join the [Expo Discord](https://chat.expo.dev/)

---

**Happy coding! 🚀**