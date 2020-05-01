export const UPDATE_HIGHSCORE = "UPDATE_HIGHSCORE";

export const updateHighScore = (score) => {
  return async (dispatch, getState) => {
    const prevScore = getState().highScore.highScore;

    if (score > prevScore) {
      dispatch({
        type: UPDATE_HIGHSCORE,
        newHighScore: score,
      });

      const userId = getState().auth.userId;
      const token = getState().auth.token;

      const response = await fetch(
        `https://nba-stat-trivia.firebaseio.com/scores.json?auth=${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user1: { score, userId } }),
        }
      );

      if (!response.ok) {
        throw new Error("Could not fetch high scores!");
      }

      const resData = await response.json();
    }
  };
};
