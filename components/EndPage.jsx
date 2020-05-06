import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import EndPageCard from "./EndPageCard";
import { useDispatch } from "react-redux";
import { updateHighScore } from "../store/actions/highScore";

export default function EndPage({ route, navigation }) {
  const { score } = route.params;
  const dispatch = useDispatch();

  dispatch(updateHighScore(score));

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
        </View>
        <View style={styles.questionCard}>
          <EndPageCard score={score} />
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
    justifyContent: "flex-start",
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
