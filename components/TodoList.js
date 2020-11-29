import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../Colors";

TodoList = ({ list }) => {
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;
  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{remainingCount}</Text>
          <Text style={styles.subtitle}>Remaining</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.subtitle}>Completed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  count: {
    color: colors.white,
    fontSize: 48,
    fontWeight: "200",
  },
  listContainer: {
    alignItems: "center",
    borderRadius: 6,
    marginHorizontal: 12,
    paddingVertical: 32,
    paddingHorizontal: 16,
    width: 200,
  },
  listTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 18,
  },
  subtitle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
});

export default TodoList;
