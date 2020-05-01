import { UPDATE_USERNAME } from "../actions/username";

const initialState = {
  username: "",
};

const usernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.newUsername };
    default:
      return state;
  }
};

export default usernameReducer;
