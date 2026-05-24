import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '../../context';
import AnimatedButton from '../../components/UI/AnimatedButton';
import BouncingBall from '../../components/UI/BouncingBall';
import DeveloperCredit from '../../components/UI/DeveloperCredit';
import FeatureChip from '../../components/UI/FeatureChip';

const FEATURES = [
  'TypeScript',
  'ESLint',
  'Prettier',
  'Reanimated',
  'Expo Router',
];

const TAB_BAR_CLEARANCE = 52;

export default function HomeScreen() {
  const { colors, spacing, typography, radius } = useTheme();
  const insets = useSafeAreaInsets();
  const [isBallAnimating, setIsBallAnimating] = useState(false);

  const glowScale = useSharedValue(1);

  useEffect(() => {
    glowScale.value = withRepeat(
      withSequence(
        withTiming(1.08, { duration: 2200 }),
        withTiming(1, { duration: 2200 })
      ),
      -1,
      true
    );
  }, [glowScale]);

  const glowStyle = useAnimatedStyle(() => ({
    transform: [{ scale: glowScale.value }],
  }));

  return (
    <LinearGradient
      colors={[colors.backgroundSecondary, colors.background, '#050508']}
      locations={[0, 0.45, 1]}
      style={styles.gradient}
    >
      <View
        style={[
          styles.glowOrb,
          styles.glowOrbTop,
          { backgroundColor: colors.primaryGlow },
        ]}
      />
      <Animated.View
        style={[
          styles.glowOrb,
          styles.glowOrbCenter,
          { backgroundColor: colors.primarySoft },
          glowStyle,
        ]}
      />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingHorizontal: spacing.lg,
              paddingTop: spacing.md,
              paddingBottom: insets.bottom + TAB_BAR_CLEARANCE,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            entering={FadeInDown.duration(650)}
            style={styles.hero}
          >
            <LinearGradient
              colors={[colors.primarySoft, 'rgba(214, 141, 250, 0.04)']}
              style={[
                styles.logoBadge,
                {
                  borderRadius: radius.xl,
                  borderColor: colors.border,
                },
              ]}
            >
              <LinearGradient
                colors={['#e9b8ff', colors.primary, '#a855f7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.logoInner, { borderRadius: radius.lg }]}
              >
                <Ionicons name="flash" size={32} color={colors.text} />
              </LinearGradient>
            </LinearGradient>

            <Text
              style={[
                styles.title,
                {
                  color: colors.text,
                  fontSize: typography.fontSize['2xl'],
                  marginTop: spacing.lg,
                },
              ]}
            >
              Industry Ready
            </Text>
            <Text
              style={[
                styles.titleAccent,
                {
                  color: colors.primary,
                  fontSize: typography.fontSize['3xl'],
                },
              ]}
            >
              Expo App
            </Text>
            <Text
              style={[
                styles.subtitle,
                {
                  color: colors.textSecondary,
                  fontSize: typography.fontSize.base,
                  lineHeight: typography.lineHeight.relaxed,
                  marginTop: spacing.md,
                },
              ]}
            >
              Production-ready starter with modern tooling, native tabs, and
              smooth animations — ready for your next idea.
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(120).duration(650)}
            style={[styles.chips, { gap: spacing.sm, marginTop: spacing.lg }]}
          >
            {FEATURES.map(feature => (
              <FeatureChip key={feature} label={feature} />
            ))}
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(220).duration(650)}
            style={[
              styles.demoCard,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderRadius: radius.xl,
                marginTop: spacing.xl,
                padding: spacing.lg,
              },
            ]}
          >
            <Text
              style={[
                styles.demoLabel,
                {
                  color: colors.textMuted,
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.semibold,
                  marginBottom: spacing.sm,
                },
              ]}
            >
              Interactive Demo
            </Text>

            <BouncingBall
              isAnimating={isBallAnimating}
              onAnimationComplete={() => setIsBallAnimating(false)}
            />

            <AnimatedButton
              title="Bounce the Ball!"
              onPress={() => setIsBallAnimating(true)}
              disabled={isBallAnimating}
            />

            <Text
              style={[
                styles.hint,
                {
                  color: colors.textMuted,
                  fontSize: typography.fontSize.sm,
                  marginTop: spacing.md,
                  lineHeight: typography.lineHeight.normal,
                },
              ]}
            >
              Edit{' '}
              <Text style={{ color: colors.primary }}>
                src/app/(app)/index.tsx
              </Text>{' '}
              and save to reload — just like Vite HMR.
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(320).duration(650)}
            style={{ marginTop: spacing.lg }}
          >
            <DeveloperCredit />
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  glowOrb: {
    position: 'absolute',
    borderRadius: 9999,
  },
  glowOrbTop: {
    width: 280,
    height: 280,
    top: -80,
    right: -60,
    opacity: 0.55,
  },
  glowOrbCenter: {
    width: 200,
    height: 200,
    bottom: '28%',
    left: -40,
    opacity: 0.8,
  },
  hero: {
    alignItems: 'center',
  },
  logoBadge: {
    padding: 4,
    borderWidth: 1,
  },
  logoInner: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  titleAccent: {
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: -1,
    marginTop: -4,
  },
  subtitle: {
    textAlign: 'center',
    maxWidth: 320,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  demoCard: {
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
  },
  demoLabel: {
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  hint: {
    textAlign: 'center',
    maxWidth: 280,
  },
});
