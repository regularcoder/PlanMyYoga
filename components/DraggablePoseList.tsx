import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";

const exampleData: Item[] = [
  {
    key: `item-0`,
    label: "Happy baby",
    backgroundColor: "grey"
  },
  {
    key: `item-1`,
    label: "Child's pose",
    backgroundColor: "green"
  },
  {
    key: `item-2`,
    label: "Fish pose",
    backgroundColor: "blue"
  }
]

type Item = {
  key: string;
  label: string;
  backgroundColor: string;
};

function DraggablePoseList() {
  const [data, setData] = useState(exampleData);

  const renderItem = useCallback(
    ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
      return (
        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: isActive ? "red" : item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
          delayLongPress={250}
          onLongPress={drag}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 32,
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    },
    []
  );

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
}

export default DraggablePoseList;
