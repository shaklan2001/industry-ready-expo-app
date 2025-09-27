import { Stack } from 'expo-router';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <RootLayoutNav />
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
