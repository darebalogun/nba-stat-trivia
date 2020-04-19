import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import GenerateQuestion from "./QuestionGenerator.js";

export default class QuestionCard extends Component {
  state = {
    question: "",
    options: [
      { key: "1", name: "", correct: false },
      { key: "2", name: "", correct: false },
      { key: "3", name: "", correct: false },
    ],
    nextQuestion: "",
    nextOptions: [],
    noCorrect: 0,
  };

  async componentDidMount() {
    let question, options, nextQuestion, nextOptions;
    [question, options] = await GenerateQuestion();
    this.updateQuestion(question, options);

    [nextQuestion, nextOptions] = await GenerateQuestion();
    this.updateNextQuestion(nextQuestion, nextOptions);
  }

  updateQuestion = (question, options) => {
    this.setState({ question });
    this.setState({ options });
  };

  updateNextQuestion = (nextQuestion, nextOptions) => {
    this.setState({ nextQuestion });
    this.setState({ nextOptions });
  };

  onOptionPress = async (option) => {
    this.setState({
      question: this.state.nextQuestion,
      options: this.state.nextOptions,
    });

    if (option.correct) {
      const newNoCorrect = this.state.noCorrect + 1;
      this.setState({ noCorrect: newNoCorrect });
      this.props.updateScore(this.state.noCorrect);
    }

    let question, options;
    [question, options] = await GenerateQuestion();
    this.updateNextQuestion(question, options);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text>{this.state.question}</Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () =>
              await this.onOptionPress(this.state.options[0])
            }
          >
            <View>
              <Text>{this.state.options[0].name}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () =>
              await this.onOptionPress(this.state.options[1])
            }
          >
            <View>
              <Text>{this.state.options[1].name}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () =>
              await this.onOptionPress(this.state.options[2])
            }
          >
            <View>
              <Text>{this.state.options[2].name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  question: {
    flex: 1,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: "2%",
  },
  options: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    height: Dimensions.get("screen").height / 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
});
