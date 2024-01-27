import { FlatList, StyleSheet, Text, View } from "react-native";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exciseContainer}>
      <Text style={styles.excisesName}>{item.name}</Text>
      <Text style={styles.exciseSubtitle}>
        {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    padding: 10,
  },
  exciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  excisesName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exciseSubtitle: {
    color: "dimgray",
  },
});
