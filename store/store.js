import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

import highScoreReducer from "../store/reducers/highScore";
import authReducer from "../store/reducers/auth";
import usernameReducer from "../store/reducers/username";

const rootReducer = combineReducers({
  highScore: highScoreReducer,
  auth: authReducer,
  username: usernameReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
