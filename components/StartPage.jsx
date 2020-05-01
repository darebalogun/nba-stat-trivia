import React, { useEffect } from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
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

  //console.log(store.getState().username.username);

  const onLeaderboardPress = () => {
    if (store.getState().username.username == "") {
      navigation.navigate("CreateUsername", { highScore: highScore });
    } else {
      navigation.navigate("LeaderBoard");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require(".././assets/placeholder.png")}
          style={styles.image}
        />
        <View>
          <Text>{highScore}</Text>
        </View>
      </View>
      <View style={styles.questionCard}>
        <StartPageCard
          onNewGame={() => navigation.navigate("QuestionPage")}
          onLeaderboardPress={onLeaderboardPress}
        />
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
