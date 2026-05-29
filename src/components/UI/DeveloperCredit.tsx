import React from 'react';
import { Text, StyleSheet, View, Pressable, Linking } from 'react-native';

import { useTheme } from '../../context';

const PORTFOLIO_URL = 'https://www.nishantshaklan.co.in/';

export default function DeveloperCredit() {
  const { colors, typography, spacing, radius } = useTheme();

  return (
    <Pressable
      onPress={() => Linking.openURL(PORTFOLIO_URL)}
      accessibilityRole="link"
      accessibilityLabel="Open Nishant Shaklan portfolio"
      style={[
        styles.badge,
        {
          backgroundColor: colors.primarySoft,
          borderColor: colors.border,
          borderRadius: radius.full,
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.xs + 2,
        },
      ]}
    >
      <Text
        style={{
          color: colors.textMuted,
          fontSize: typography.fontSize.xs,
        }}
      >
        Developed by{' '}
        <Text
          style={{
            color: colors.primary,
            fontWeight: typography.fontWeight.semibold,
          }}
        >
          Nishant Shaklan
        </Text>
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'center',
    borderWidth: 1,
  },
});
