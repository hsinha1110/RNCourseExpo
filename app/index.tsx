import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  console.log(enteredGoalText);
  function goalInputHandler(enteredText: any) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.input}
          placeholder="Your course goals"
          placeholderTextColor="gray"
        />
        <View style={styles.button}>
          <Button title="Add" onPress={addGoalHandler} />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalText}>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
  },

  button: {
    width: 80,
  },

  goalsContainer: {
    marginTop: 10,
  },

  goalText: {
    fontSize: 16,
  },
});
