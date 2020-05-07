import React from "react";
import {
  StyleSheet,
  View,
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
    justifyContent: "space-between",
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
    alignItems: "center",
    borderRadius: 18,
    height: Dimensions.get("screen").height / 9,
    padding: 5,
    borderColor: "#693a00",
    borderWidth: 1,
    backgroundColor: "rgba(255,246,232, 0.8)",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 25,
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
    backgroundColor: "rgba(255,246,232, 0.8)",
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
