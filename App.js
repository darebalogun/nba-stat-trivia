import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import QuestionPage from "./components/QuestionPage";
import StartPage from "./components/StartPage";
import EndPage from "./components/EndPage";
import highScoreReducer from "./store/reducers/highScore";

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  highScore: highScoreReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gesturesEnabled: false,
          }}
        >
          <Stack.Screen
            name="StartPage"
            component={StartPage}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="QuestionPage"
            component={QuestionPage}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="EndPage"
            component={EndPage}
            options={{
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
