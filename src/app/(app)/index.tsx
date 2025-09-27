import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}}>
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Welcome to Home</Text>
    </View>
  );
}
