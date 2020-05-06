import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import StartPageCard from "./StartPageCard";
import { useSelector, useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth";
import { store } from "../store/store";

export default function StartPage({ navigation }) {
  const highScore = useSelector((state) => state.highScore.highScore);

  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };

  useEffect(() => {
    loginHandler();
  });

  const onLeaderboardPress = () => {
    if (store.getState().username.username == "") {
      navigation.navigate("CreateUsername", { highScore: highScore });
    } else {
      navigation.navigate("LeaderBoard");
    }
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
          <View style={styles.highscore}>
            <Text
              style={{ fontSize: 25, color: "#693a00", fontWeight: "bold" }}
            >
              HIGHSCORE: {highScore}
            </Text>
          </View>
        </View>
        <View style={styles.questionCard}>
          <StartPageCard
            onNewGame={() => navigation.navigate("QuestionPage")}
            onLeaderboardPress={onLeaderboardPress}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 35,
    paddingHorizontal: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  highscore: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    opacity: 1,
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
    borderColor: "black",
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 30,
    height: "60%",
  },
});
