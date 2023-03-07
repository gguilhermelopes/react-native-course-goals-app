import { useState } from "react";
import { StyleSheet, TextInput, Button } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [inputGoal, setInputGoal] = useState("");

  const goalInputHandler = (input) => {
    setInputGoal(input);
  };

  const addGoalHandler = () => {
    onAddGoal(inputGoal);
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
      <Button title="Add Goal" onPress={addGoalHandler} />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});

export default GoalInput;
