import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CreateUsername({ navigation }) {
  const [input, setInput] = useState("Enter username");
  const [valid, setValid] = useState(false);

  const onChangeText = async (text) => {
    setInput(text);
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
