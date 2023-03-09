import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.content}>
      <Text>App</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
