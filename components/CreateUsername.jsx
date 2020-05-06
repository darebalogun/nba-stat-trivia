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
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import * as authActions from "../store/actions/auth";
import { updateUsername } from "../store/actions/username";

export default function CreateUsername({ navigation }) {
  const [input, setInput] = useState("");
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

    if (input == "") {
      Alert.alert("Error", "Please enter a valid username");
    } else if (resData.hasOwnProperty(input)) {
      Alert.alert("Error", "Username is taken!");
    } else {
      setValid(true);
      dispatch(updateUsername(input));
      await updateLeaderboard();
      navigation.replace("LeaderBoard");
    }
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
          <View style={styles.title}>
            <Text style={styles.titleText}>Create a username</Text>
          </View>
        </View>
        <View style={styles.questionCard}>
          <View style={styles.inputRow}>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Enter a username"
                onChangeText={(text) => onChangeText(text)}
                value={input}
                style={{ fontSize: 17 }}
              />
            </View>
            <TouchableOpacity onPress={login} style={styles.quit}>
              <View>
                <Text style={styles.quitText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  title: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    opacity: 1,
  },
  titleText: {
    fontSize: 30,
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
  inputRow: {
    flexDirection: "column",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "rgba(255,228,189,0.5)",
  },
  textInput: {
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "rgba(240, 240, 240, 0.9)",
    borderWidth: 1,
    padding: 6,
    marginVertical: 20,
    width: "100%",
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
    justifyContent: "center",
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
  saveButton: {
    width: "50%",
  },
  quitText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#693a00",
  },
});
