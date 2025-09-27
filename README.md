# Expo Native Tabs Template

A modern, production-ready Expo Router template with native tabs, TypeScript, and industry-standard file structure.

## ✨ Features

- 🚀 **Expo Router v6** with file-based routing
- 📱 **Native Tabs** with cross-platform icons (iOS SF Symbols + Android Material Icons)
- 🎨 **Modern UI** with gradient backgrounds and beautiful styling
- 📝 **TypeScript** for type safety
- 🏗️ **Industry-standard file structure** with organized components, hooks, and services
- 📦 **Ready for production** with proper configuration
- 🎯 **Cross-platform** - works on iOS, Android, and Web

## 🚀 Quick Start

### Option 1: Using npx (Recommended)

```bash
npx create-expo-app@latest MyApp --template expo-native-tabs-template
```

### Option 2: Using yarn

```bash
yarn create expo-app MyApp --template expo-native-tabs-template
```

### Option 3: Manual Installation

```bash
# Clone the template
git clone https://github.com/yourusername/expo-native-tabs-template.git MyApp
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
src/
├── app/
│   ├── _layout.tsx          # Root layout with Stack navigator
│   ├── index.tsx            # Landing page
│   └── (app)/               # Main app group
│       ├── _layout.tsx      # Native tabs layout
│       ├── index.tsx        # Home tab
│       └── settings.tsx     # Settings tab
├── components/
│   └── ui/                  # Reusable UI components
├── hooks/                   # Custom React hooks
├── services/                # API services and utilities
└── types/                   # TypeScript type definitions
```

## 🎨 What's Included

### Native Tabs
- **Home Tab**: Main screen with your app content
- **Settings Tab**: Settings and configuration screen
- **Cross-platform icons**: SF Symbols on iOS, Material Icons on Android

### Modern UI Components
- Gradient backgrounds
- Custom View and Text components
- Responsive design
- Dark theme support

### Development Tools
- TypeScript configuration
- ESLint and Prettier setup
- Hot reloading
- Cross-platform development

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

### Styling

The template uses a modern design system with:
- Purple gradient theme (`#d68dfa`)
- Dark backgrounds
- Consistent spacing and typography
- Cross-platform safe areas

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

- **Expo Router v6**: File-based routing
- **Native Tabs**: Platform-native tab navigation
- **TypeScript**: Type safety
- **Expo Linear Gradient**: Beautiful gradients
- **Moment.js**: Date handling
- **Vector Icons**: Cross-platform icons

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [React Navigation](https://reactnavigation.org/) for navigation
- [Expo Router](https://expo.github.io/router/) for file-based routing

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [Expo documentation](https://docs.expo.dev/)
- Join the [Expo Discord](https://chat.expo.dev/)

---

**Happy coding! 🚀**
