import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo{" "}
            <Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addList: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  addList: {
    alignItems: "center",
    borderColor: colors.lightBlue,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: "center",
    padding: 16,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  divider: {
    alignSelf: "center",
    backgroundColor: colors.lightBlue,
    flex: 1,
    height: 1,
  },
  title: {
    color: colors.black,
    fontSize: 38,
    fontWeight: "800",
    paddingHorizontal: 64,
  },
});
