import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const MyComponent = () => (
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default MyComponent;