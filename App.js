import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import QuestionPage from "./components/QuestionPage";
import StartPage from "./components/StartPage";
import EndPage from "./components/EndPage";
import CreateUsername from "./components/CreateUsername";
import LeaderBoard from "./components/LeaderBoard";
import { store } from "./store/store";

const Stack = createStackNavigator();

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
            <Stack.Screen
              name="LeaderBoard"
              component={LeaderBoard}
              options={{ gestureEnabled: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
