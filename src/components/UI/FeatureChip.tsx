import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from '../../context';

interface FeatureChipProps {
  label: string;
}

export default function FeatureChip({ label }: FeatureChipProps) {
  const { colors, radius, spacing, typography } = useTheme();

  return (
    <View
      style={[
        styles.chip,
        {
          backgroundColor: colors.primarySoft,
          borderColor: colors.border,
          borderRadius: radius.full,
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.sm,
        },
      ]}
    >
      <View style={[styles.dot, { backgroundColor: colors.primary }]} />
      <Text
        style={{
          color: colors.textSecondary,
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.medium,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
