import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';

interface BouncingBallProps {
  isAnimating: boolean;
  onAnimationComplete?: () => void;
}

export default function BouncingBall({
  isAnimating,
  onAnimationComplete,
}: BouncingBallProps) {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  React.useEffect(() => {
    if (isAnimating) {
      // Start bouncing animation
      translateY.value = withRepeat(
        withSequence(
          withTiming(-100, { duration: 300 }),
          withTiming(0, { duration: 300 }),
          withTiming(-80, { duration: 250 }),
          withTiming(0, { duration: 250 }),
          withTiming(-60, { duration: 200 }),
          withTiming(0, { duration: 200 }),
          withTiming(-40, { duration: 150 }),
          withTiming(0, { duration: 150 }),
          withTiming(-20, { duration: 100 }),
          withTiming(0, { duration: 100 }),
          withTiming(0, { duration: 500 }) // Pause at the end
        ),
        1,
        false
      );

      // Scale animation
      scale.value = withRepeat(
        withSequence(
          withTiming(1.2, { duration: 150 }),
          withTiming(0.8, { duration: 150 }),
          withTiming(1.1, { duration: 100 }),
          withTiming(0.9, { duration: 100 }),
          withTiming(1, { duration: 100 })
        ),
        1,
        false
      );

      // Call completion callback after animation
      if (onAnimationComplete) {
        setTimeout(() => {
          runOnJS(onAnimationComplete)();
        }, 3000); // Total animation duration
      }
    } else {
      translateY.value = withTiming(0, { duration: 200 });
      scale.value = withTiming(1, { duration: 200 });
    }
  }, [isAnimating, onAnimationComplete, translateY, scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 120,
    marginBottom: 20,
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d68dfa',
    shadowColor: '#d68dfa',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
