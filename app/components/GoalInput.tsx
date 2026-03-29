import { Colors } from "@/app-example/constants/theme";
import React, { FC, useState } from "react";
import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { GoalInputProps } from "../types";

const GoalInput: FC<GoalInputProps> = ({ visible, onAddGoal, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    if (!enteredGoalText.trim()) {
      Alert.alert("Input required", "Please enter a goal");
      return;
    }
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/goal.png")}
        />

        <TextInput
          placeholder="Your course goal"
          style={styles.input}
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          placeholderTextColor={Colors.light.text}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#f31282" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#fff" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.light.itemGoalBackground,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  input: {
    backgroundColor: Colors.light.background,
    padding: 10,
    marginBottom: 20,
    width: "90%",
    color: Colors.light.text,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
