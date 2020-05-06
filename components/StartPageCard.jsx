import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function StartPageCard(props) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    { key: "1", value: "New Game", onPress: props.onNewGame },
    { key: "2", value: "LeaderBoard", onPress: props.onLeaderboardPress },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.text}>{question}</Text>
        </View>
      </View>
      <View style={styles.options}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.button}
            onPress={option.onPress}
          >
            <View>
              <Text style={styles.text}>{option.value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#693a00",
  },
  question: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: "rgba(255,246,232, 0.6)",
  },
  options: {
    flex: 2,
    flexDirection: "column",
    marginVertical: 30,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    height: Dimensions.get("screen").height / 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    backgroundColor: "rgba(255,246,232, 0.6)",
    marginVertical: 20,
  },
});
