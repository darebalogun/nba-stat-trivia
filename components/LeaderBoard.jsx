import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import Leaderboard from "react-native-leaderboard";

export default function LeaderBoard({ navigation }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://nba-stat-trivia.firebaseio.com/scores.json"
      );
      const resData = await response.json();
      setData(resData);
    };

    getData();
  }, []);

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
          <View style={styles.title}>
            <Text style={styles.titleText}>LeaderBoard</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.leaderboardContainer}>
            <Leaderboard
              data={data}
              sortBy="score"
              labelBy="username"
              rankStyle={styles.text}
              labelStyle={styles.labelStyle}
              scoreStyle={styles.text}
              oddRowColor="rgba(255,246,237,0.3)"
              evenRowColor="rgba(255,246,237,0.7)"
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("StartPage")}
          style={styles.quit}
        >
          <View>
            <Text style={styles.text}>Quit</Text>
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
  leaderboardContainer: {
    borderColor: "#693a00",
    borderWidth: 1,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    opacity: 1,
  },
  leaderboardContainer: {
    padding: 25,
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
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#693a00",
  },
  titleText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#693a00",
  },
  labelStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#693a00",
  },
});
