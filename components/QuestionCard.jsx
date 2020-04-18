import React, { Component, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import QuestionGenerator from "./QuestionGenerator";

export default function QuestionCard(props) {
  const [question, setQuestion] = useState(
    "Who led the league in rebounds in 2004?"
  );
  const [options, setOptions] = useState([
    { key: "1", value: "Shaquille O'Neil" },
    { key: "2", value: "Kevin Garnett" },
    { key: "3", value: "Tim Duncan" },
  ]);

  const onOptionPress = () => {
    QuestionGenerator();
  };

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
            onPress={onOptionPress}
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
