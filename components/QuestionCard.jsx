import React, { Component, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import GenerateQuestion from "./QuestionGenerator";

export default function QuestionCard(props) {
  const [question, setQuestion] = useState(
    "Who led the league in rebounds in 2004?"
  );
  const [options, setOptions] = useState([
    { key: "1", name: "Shaquille O'Neil", correct: false },
    { key: "2", name: "Kevin Garnett", correct: false },
    { key: "3", name: "Tim Duncan", correct: false },
  ]);

  const updateQuestion = (question, options) => {
    setQuestion(question);
    setOptions(options);
  };

  const onOptionPress = () => {
    GenerateQuestion(updateQuestion);
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
              <Text>{option.name}</Text>
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
