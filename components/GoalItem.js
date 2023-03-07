import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ value, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#380b73" }}
        onLongPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{value}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
