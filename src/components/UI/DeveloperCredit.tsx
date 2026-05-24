import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { useTheme } from '../../context';

export default function DeveloperCredit() {
  const { colors, typography, spacing, radius } = useTheme();

  return (
    <View
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
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'center',
    borderWidth: 1,
  },
});
