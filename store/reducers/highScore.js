import { UPDATE_HIGHSCORE } from "../actions/highScore";

const initialState = {
  highScore: 0,
};

const highScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HIGHSCORE:
      if (action.newHighScore > state.highScore) {
        return { ...state, highScore: action.newHighScore };
      }
    default:
      return state;
  }
};

export default highScoreReducer;
