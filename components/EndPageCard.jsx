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
    borderColor: "#693a00",
    backgroundColor: "rgba(255,246,232, 0.8)",
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 80,
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
