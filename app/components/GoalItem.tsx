import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ItemGoalProps } from "../types";

const GoalItem: FC<ItemGoalProps> = ({ item, onDeleteItem }) => {
  return (
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={() => onDeleteItem(item.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#b180f0",
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
