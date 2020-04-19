export const UPDATE_HIGHSCORE = "UPDATE_HIGHSCORE";

export const updateHighScore = (score) => {
  return { type: UPDATE_HIGHSCORE, newHighScore: score };
};
