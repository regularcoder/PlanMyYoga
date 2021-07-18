import React, {useState, useCallback} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import produce from 'immer';
import PoseItem from './PoseItem';

const DURATION_JUMP = 30;

type Item = {
  key: string;
  label: string;
  backgroundColor: string;
  durationInSeconds: number;
};

function DraggablePoseList() {
  const exampleData: Item[] = [
    {
      key: `item-0`,
      label: 'Happy baby',
      backgroundColor: 'grey',
      durationInSeconds: 30,
    },
    {
      key: `item-1`,
      label: "Child's pose",
      backgroundColor: 'green',
      durationInSeconds: 30,
    },
    {
      key: `item-2`,
      label: 'Fish pose',
      backgroundColor: 'blue',
      durationInSeconds: 30,
    },
  ];

  const [data, setData] = useState(exampleData);

  const increaseDuration = (key: string) => {
    setData(produce((oldData: Item[]) => {
      const poseToAdjust = oldData.find(pose => pose.key == key);
      poseToAdjust!.durationInSeconds += DURATION_JUMP
    }));
  };

  const decreaseDuration = (key: string) => {
    setData(produce((oldData: Item[]) => {
      const poseToAdjust = oldData.find(pose => pose.key == key);
      poseToAdjust!.durationInSeconds -= DURATION_JUMP
    }));
  };

  const renderItem = useCallback(
    ({item, index, drag, isActive}: RenderItemParams<Item>) => {
      console.log({item});
      return (
        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: isActive ? 'red' : item.backgroundColor,
          }}
          delayLongPress={250}
          onLongPress={drag}>
          <PoseItem
            name={item.label}
            durationInSeconds={item.durationInSeconds}
            onDurationIncrease={() => increaseDuration(item.key)}
            onDurationDecrease={() => decreaseDuration(item.key)}
          />
        </TouchableOpacity>
      );
    },
    [],
  );

  return (
    <View style={{flex: 1, margin: 20}}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({data}) => setData(data)}
      />
    </View>
  );
}

export default DraggablePoseList;
