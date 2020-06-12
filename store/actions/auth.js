export const LOGIN = "LOGIN";

const API_KEY = process.env.GOOGLE_KEY;

export const login = () => {
  return async (dispatch) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
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
