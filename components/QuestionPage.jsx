import React from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import QuestionCard from "./QuestionCard";
import CountdownCircle from "react-native-countdown-circle";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function QuestionPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require(".././assets/placeholder.png")}
          style={styles.image}
        />
        <CountdownCircle seconds={90} radius={30} borderWidth={10} />
      </View>
      <View style={styles.questionCard}>
        <QuestionCard />
      </View>
      <View style={styles.quit}>
        <TouchableOpacity onPress={() => navigation.navigate("StartPage")}>
          <Text>Quit</Text>
        </TouchableOpacity>
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
  quit: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: Dimensions.get("screen").height / 15,
    width: "50%",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
