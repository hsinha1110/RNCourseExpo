import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import { Colors } from "@/app-example/constants/theme";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { Goal } from "./types";

const Index = () => {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id),
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        color={Colors.light.background}
        onPress={startAddGoalHandler}
      />

      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />

      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <GoalItem item={item} onDeleteItem={deleteGoalHandler} />
        )}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#200765",
  },

  header: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
