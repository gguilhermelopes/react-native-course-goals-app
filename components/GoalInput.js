import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Image } from "react-native";

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
      <Image
        style={styles.image}
        source={require("../assets/images/goal.png")}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={inputGoal}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancel} color="#f31282" />
        </View>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
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
