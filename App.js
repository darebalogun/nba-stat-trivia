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
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import ReduxThunk from "redux-thunk";

import QuestionPage from "./components/QuestionPage";
import StartPage from "./components/StartPage";
import EndPage from "./components/EndPage";
import highScoreReducer from "./store/reducers/highScore";
import authReducer from "./store/reducers/auth";
import CreateUsername from "./components/CreateUsername";

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  highScore: highScoreReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
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
            <Stack.Screen
              name="CreateUsername"
              component={CreateUsername}
              options={{ gestureEnabled: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
