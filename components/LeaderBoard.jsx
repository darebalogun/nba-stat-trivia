import React, { useEffect, useState } from "react";
import Leaderboard from "react-native-leaderboard";

export default function LeaderBoard({ navigation }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://nba-stat-trivia.firebaseio.com/scores.json"
      );
      const resData = await response.json();
      console.log(resData);
      setData(resData);
    };

    getData();
  }, []);

  return <Leaderboard data={data} sortBy="score" labelBy="username" />;
}
