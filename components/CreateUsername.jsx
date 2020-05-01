import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  Button,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import * as authActions from "../store/actions/auth";
import { updateUsername } from "../store/actions/username";
import { updateHighScore } from "../store/actions/highScore";

export default function CreateUsername({ route, navigation }) {
  const [input, setInput] = useState("Enter username");
  const [valid, setValid] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const score = useSelector((state) => state.highScore.highScore);
  const userId = useSelector((state) => state.auth.userId);

  const onChangeText = async (text) => {
    setInput(text);
  };

  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const login = async () => {
    const response = await fetch(
      "https://nba-stat-trivia.firebaseio.com/scores.json"
    );
    const resData = await response.json();

    console.log(resData);

    if (!resData.hasOwnProperty(input)) {
      setValid(true);
      dispatch(updateUsername(input));
      await updateLeaderboard();
      navigation.replace("LeaderBoard");
    } else {
      Alert.alert("Error", "Username is taken!");
    }
    console.log(valid);
  };

  const username = input;

  const updateLeaderboard = async () => {
    const response = await fetch(
      `https://nba-stat-trivia.firebaseio.com/scores/${username}.json?auth=${token}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score, userId, username }),
      }
    );

    const resData = await response.json();
    console.log(resData);

    if (!response.ok) {
      throw new Error("Could not fetch high scores!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require(".././assets/placeholder.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.questionCard}>
        <TextInput onChangeText={(text) => onChangeText(text)} value={input} />
        <Button title="Save" onPress={login} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("StartPage")}
        style={styles.quit}
      >
        <View>
          <Text>Quit</Text>
        </View>
      </TouchableOpacity>
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
