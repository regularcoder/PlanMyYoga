/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Example from './components/Example'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 45 }}>Plan my yoga</Text>
          <Example />
      </View>
  );
};

export default App;
