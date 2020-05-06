import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EndPageCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.finalScore}>
          <Text style={styles.text}>Final Score</Text>
        </View>
        <View>
          <Text style={styles.text}>{props.score}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(255,228,189,0.5)",
    borderRadius: 20,
    padding: 30,
  },
  finalScore: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "#693a00",
  },
});
