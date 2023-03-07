import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const GoalInput = ({ onAddGoal, onCancel }) => {
  const [inputGoal, setInputGoal] = useState("");

  const goalInputHandler = (input) => {
    setInputGoal(input);
  };

  const addGoalHandler = () => {
    if (inputGoal) onAddGoal(inputGoal);
    setInputGoal("");
  };

  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={inputGoal}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancel} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
