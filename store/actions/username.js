export const UPDATE_USERNAME = "UPDATE_USERNAME";

export const updateUsername = (username) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_USERNAME,
      newUsername: username,
    });
  };
};
