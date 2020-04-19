import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EndPageCard(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>You Scored</Text>
      </View>
      <View>
        <Text>{props.score}</Text>
      </View>
      <View>
        <Text>Nice</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 30,
  },
});
