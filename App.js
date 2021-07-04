/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import DraggablePoseList from './components/DraggablePoseList'
import { FAB } from 'react-native-elements';

const App = () => {
  return (
      <View style={{ flex: 1 }}>
          <Text 
            style={{
              fontWeight: "bold",
              fontSize: 32,
            }}>Plan my yoga</Text>
          <DraggablePoseList />
          <FAB title="Add" />
      </View>
  );
};

export default App;
