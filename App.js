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
  };

  const deleteGoalHandler = (id) => {
    Vibration.vibrate(5);
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };

  const handleModal = () => {
    setModalOn(true);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={handleModal} />
      <Modal visible={modalOn} animationType="slide">
        <View style={styles.inputContainer}>
          <GoalInput onAddGoal={addGoalHandler} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  goalsContainer: {
    flex: 5,
  },
});
