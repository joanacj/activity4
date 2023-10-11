import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = () => (
  <Surface style={styles.surface} elevation={4}>
     <Text>Elevation 1</Text>
  </Surface>
);

export default MyComponent;

const styles = StyleSheet.create({
  surface: {
    padding: 10,
    height: 80,
    width: 80,
    border: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});