export const LOGIN = "LOGIN";

export const login = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCg0u1uNuAOHan8SVMdVUuHYpDy3cRmPds",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          returnSecureToken: true,
        }),
      }
    );

    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Unable to sign in anonymously");
    }

    dispatch({ type: LOGIN, token: resData.idToken, userId: resData.localId });
  };
};
