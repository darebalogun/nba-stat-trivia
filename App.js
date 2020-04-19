import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import QuestionPage from "./components/QuestionPage";
import StartPage from "./components/StartPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EndPage from "./components/EndPage";

const Stack = createStackNavigator();

export default function App() {
  return (
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
  );
}
