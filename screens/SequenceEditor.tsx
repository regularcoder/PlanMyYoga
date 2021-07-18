import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import DraggablePoseList from '../components/DraggablePoseList'
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SequenceEditor = () => {
  return (
      <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <Text 
                style={{
                fontWeight: "bold",
                fontSize: 32,
                }}>Sequence Editor</Text>
            </View>
            <View  style={{ flex: 1 }}>
                <DraggablePoseList />
                <FAB icon={
    <Icon
      name="plus"
      size={25}
      color="white"
    />
  } size='large' placement='right' />
            </View>
      </View>
  );
};

export default SequenceEditor;