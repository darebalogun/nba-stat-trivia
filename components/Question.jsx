import React, { Component, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Question() {
  const [question, setQuestion] = useState(
    "Put your knowledge of NBA stats to the test"
  );
  const [options, setOptions] = useState([
    { key: "1", value: "New Game" },
    { key: "2", value: "LeaderBoard" },
    { key: "3", value: "Highscore" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text>{question}</Text>
      </View>
      <View style={styles.options}>
        <FlatList
          data={options}
          renderItem={(option) => (
            <TouchableOpacity>
              <Text>{option.item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    flex: 1,
    margin: 50,
  },
  options: {
    flex: 2,
  },
});
