import { Stack } from 'expo-router';
import {
  DarkTheme,
  ThemeProvider as NavigationThemeProvider,
} from 'expo-router/react-navigation';

import { ThemeProvider } from '../context/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <NavigationThemeProvider value={DarkTheme}>
        <RootLayoutNav />
      </NavigationThemeProvider>
    </ThemeProvider>
  );
}

const RootLayoutNav = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Basic Setup', headerLargeTitle: false }}
      />
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
    </Stack>
  );
};
