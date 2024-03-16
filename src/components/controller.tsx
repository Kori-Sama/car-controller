import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Controller = () => {
  type Direction = "up" | "down" | "left" | "right";
  const onPress = (direction: Direction) => {
    console.log("Moving", direction);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress("up")} style={styles.button}>
        <View style={styles.buttonBackground}>
          <AntDesign name="caretup" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => onPress("left")} style={styles.button}>
          <View style={styles.buttonBackground}>
            <AntDesign name="caretleft" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View style={styles.centerButton} />
        <TouchableOpacity
          onPress={() => onPress("right")}
          style={styles.button}
        >
          <View style={styles.buttonBackground}>
            <AntDesign name="caretright" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onPress("down")} style={styles.button}>
        <View style={styles.buttonBackground}>
          <AntDesign name="caretdown" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Controller;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 5,
  },
  centerButton: {
    margin: 5,
    width: 50,
    height: 50,
  },
  buttonBackground: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 30,
  },
});
