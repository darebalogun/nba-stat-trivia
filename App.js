import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  AsyncStorage,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import QuestionPage from "./components/QuestionPage";
import StartPage from "./components/StartPage";
import EndPage from "./components/EndPage";
import highScoreReducer from "./store/reducers/highScore";

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  highScore: highScoreReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}
