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
            source={require(".././assets/icon.png")}
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
                navigation.replace("EndPage", { score: score });
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
    justifyContent: "space-between",
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
    alignItems: "center",
    borderRadius: 18,
    height: Dimensions.get("screen").height / 9,
    padding: 5,
    borderColor: "#693a00",
    borderWidth: 1,
    backgroundColor: "rgba(255,246,232,0.7)",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 35,
  },
  questionCard: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 30,
    height: "60%",
  },
  quit: {
    borderColor: "#693a00",
    borderWidth: 1,
    borderRadius: 10,
    height: Dimensions.get("screen").height / 15,
    width: "50%",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,246,232,0.7)",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 25,
  },
  quitText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#693a00",
  },
});
