import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import StartPageCard from "./StartPageCard";

export default function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require(".././assets/placeholder.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.questionCard}>
        <StartPageCard onNewGame={() => navigation.navigate("QuestionPage")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    marginVertical: 35,
    marginHorizontal: 10,
  },
  image: {
    width: Dimensions.get("screen").height / 10,
    height: Dimensions.get("screen").height / 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: Dimensions.get("screen").height / 9,
    padding: 5,
  },
  questionCard: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 30,
    height: "60%",
  },
});
