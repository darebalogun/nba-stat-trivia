import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function StartPageCard(props) {
  const [question, setQuestion] = useState(
    "Put your knowledge of NBA stats to the test"
  );
  const [options, setOptions] = useState([
    { key: "1", value: "New Game", onPress: props.newGame },
    { key: "2", value: "LeaderBoard", onPress: props.newGame },
    { key: "3", value: "Highscore", onPress: props.newGame },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text>{question}</Text>
      </View>
      <View style={styles.options}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.button}
            onPress={props.onNewGame}
          >
            <View>
              <Text>{option.value}</Text>
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
  question: {
    flex: 1,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: "2%",
  },
  options: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
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
  },
});
