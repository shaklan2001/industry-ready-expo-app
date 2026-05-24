import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import { useTheme } from '../../context';

interface AnimatedButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function AnimatedButton({
  title,
  onPress,
  disabled = false,
}: AnimatedButtonProps) {
  const { colors, radius, typography, spacing } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          scale.value = withSpring(0.95);
        }}
        onPressOut={() => {
          scale.value = withSpring(1);
        }}
        disabled={disabled}
        style={[
          styles.button,
          {
            borderRadius: radius.lg,
            paddingHorizontal: spacing.lg,
            paddingVertical: spacing.md,
            minWidth: 220,
            backgroundColor: disabled ? colors.primaryDisabled : colors.primary,
            shadowColor: disabled ? 'transparent' : colors.primary,
          },
        ]}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.semibold,
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
});
