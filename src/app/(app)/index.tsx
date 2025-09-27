import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedButton from '../../components/UI/AnimatedButton';
import BouncingBall from '../../components/UI/BouncingBall';

export default function HomeScreen() {
  const [isBallAnimating, setIsBallAnimating] = useState(false);

  const handleBounceBall = () => {
    setIsBallAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsBallAnimating(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Industry Ready Expo App Setup</Text>
      <Text style={styles.subtitle}>
        This app includes TypeScript, ESLint, Prettier, and React Native
        Reanimated
      </Text>
      
      <BouncingBall 
        isAnimating={isBallAnimating} 
        onAnimationComplete={handleAnimationComplete}
      />
      
      <View style={styles.buttonContainer}>
        <AnimatedButton 
          title="Bounce the Ball!" 
          onPress={handleBounceBall}
          disabled={isBallAnimating}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  buttonContainer: {
    gap: 16,
    alignItems: 'center',
  },
});
