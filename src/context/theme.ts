export const theme = {
  colors: {
    background: '#000000',
    backgroundSecondary: '#0F0F23',
    surface: '#1a1a2e',
    text: '#ffffff',
    textSecondary: '#cccccc',
    textMuted: '#9ca3af',
    primary: '#d68dfa',
    primaryDisabled: '#9ca3af',
    primaryGlow: 'rgba(214, 141, 250, 0.35)',
    primarySoft: 'rgba(214, 141, 250, 0.12)',
    accent: '#d68dfa',
    border: '#2a2a3e',
    error: '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
  },
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 24,
      '2xl': 28,
      '3xl': 32,
    },
    fontWeight: {
      normal: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
    },
    lineHeight: {
      tight: 20,
      normal: 24,
      relaxed: 28,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
} as const;

export type Theme = typeof theme;
export type ThemeColors = keyof typeof theme.colors;
