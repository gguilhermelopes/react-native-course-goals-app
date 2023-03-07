import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Vibration,
  Modal,
  Button,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [goalsList, setGoalsList] = useState([]);
  const [modalOn, setModalOn] = useState(false);

  const addGoalHandler = (inputGoal) => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { value: inputGoal, key: Math.random().toString() },
    ]);
    handleModalOff();
  };

  const deleteGoalHandler = (id) => {
    Vibration.vibrate(5);
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };

  const handleModalOn = () => {
    setModalOn(true);
  };

  const handleModalOff = () => {
    setModalOn(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={handleModalOn} />
      <Modal visible={modalOn} animationType="slide">
        <View style={styles.inputContainer}>
          <GoalInput onAddGoal={addGoalHandler} onCancel={handleModalOff} />
        </View>
      </Modal>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => (
            <GoalItem
              value={itemData.item.value}
              onDeleteItem={deleteGoalHandler}
              id={itemData.item.key}
            />
          )}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  goalsContainer: {
    flex: 5,
  },
});
