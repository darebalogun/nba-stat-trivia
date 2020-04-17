export default function GenerateQuestion() {
  const teamLeaders = [
    { text: "points per game", key: "ppg" },
    { text: "rebounds per game", key: "trpg" },
    { text: "assists per game", key: "apg" },
    { text: "feild goal percentage", key: "fpg" },
    { text: "3-point percentage", key: "tpp" },
    { text: "free-throw percentage", key: "ftp" },
    { text: "blocks per game", key: "bpg" },
    { text: "steals per game", key: "spg" },
    { text: "turnovers per game", key: "tpg" },
    { text: "fouls per game", key: "fpg" },
  ];

  const teams = ["mavericks", "rockets", "grizzlies"];

  let teamLeader = teamLeaders[Math.floor(Math.random() * teamLeaders.length)];

  let year = 2015 + Math.floor(Math.random() * 5);

  let team = teams[Math.floor(Math.random() * teams.length)];

  const getStat = () => {
    console.log(teamLeader);
    console.log(team);
    console.log(year);

    fetch(
      "http://data.nba.net/data/10s/prod/v1/" +
        year +
        "/teams/" +
        team +
        "/leaders.json"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.league.standard[teamLeader.key]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return getStat();
}
