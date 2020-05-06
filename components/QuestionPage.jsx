import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import QuestionCard from "./QuestionCard";
import CountdownCircle from "react-native-countdown-circle";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function QuestionPage({ navigation }) {
  const [score, setScore] = useState(0);

  const onUpdateScore = (score) => {
    setScore(score);
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Image
            source={require(".././assets/placeholder.png")}
            style={styles.image}
          />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.scoreText}>Score: {score}</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CountdownCircle
              seconds={90}
              radius={30}
              borderWidth={2}
              color="black"
              bgColor="#facf8c"
              textStyle={{ fontSize: 20 }}
              onTimeElapsed={() => {
                navigation.navigate("EndPage", { score: score });
              }}
            />
          </View>
        </View>
        <View style={styles.questionCard}>
          <QuestionCard
            updateScore={(score) => {
              onUpdateScore(score);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("StartPage")}
          style={styles.quit}
        >
          <View>
            <Text style={styles.quitText}>Quit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 35,
    marginHorizontal: 10,
  },
  scoreText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#693a00",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  image: {
    width: Dimensions.get("screen").height / 10,
    height: Dimensions.get("screen").height / 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    height: Dimensions.get("screen").height / 9,
    padding: 5,
    backgroundColor: "rgba(255,228,189,0.5)",
  },
  questionCard: {
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
    backgroundColor: "rgba(255,246,232, 0.6)",
  },
  quitText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#693a00",
  },
});
