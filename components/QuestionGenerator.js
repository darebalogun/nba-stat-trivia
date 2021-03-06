import { GetPlayerName } from "./PlayersJson.js";

const teamLeaders = [
  { text: "points per game", key: "ppg" },
  { text: "rebounds per game", key: "trpg" },
  { text: "assists per game", key: "apg" },
  { text: "field goal percentage", key: "fgp" },
  { text: "3-point percentage", key: "tpp" },
  { text: "free-throw percentage", key: "ftp" },
  { text: "blocks per game", key: "bpg" },
  { text: "steals per game", key: "spg" },
  { text: "turnovers per game", key: "tpg" },
  { text: "fouls per game", key: "pfpg" },
];

const teams = [
  "mavericks",
  "rockets",
  "grizzlies",
  "pelicans",
  "spurs",
  "nuggets",
  "timberwolves",
  "thunder",
  "blazers",
  "jazz",
  "warriors",
  "clippers",
  "lakers",
  "suns",
  "kings",
  "celtics",
  "nets",
  "knicks",
  "sixers",
  "raptors",
  "bulls",
  "cavaliers",
  "pistons",
  "pacers",
  "bucks",
  "hawks",
  "hornets",
  "heat",
  "magic",
  "wizards",
];

export default async function GenerateQuestion(updateQuestion) {
  let teamLeader = teamLeaders[Math.floor(Math.random() * teamLeaders.length)];

  let year = 2015 + Math.floor(Math.random() * 5);

  let year_plus = year + 1;

  let team = teams[Math.floor(Math.random() * teams.length)];

  let Team = team.charAt(0).toUpperCase() + team.substring(1);

  let question =
    "Who led the " +
    Team +
    " in " +
    teamLeader.text +
    " in " +
    year +
    "/" +
    year_plus +
    "?";

  let response = await fetch(
    "http://data.nba.net/data/prod/v1/" +
      year +
      "/teams/" +
      team +
      "/leaders.json"
  );

  let json = await response.json();

  try {
    let personId = await json.league.standard[teamLeader.key][0].personId;
    let options = GetPlayerName(year, personId);
    if (options == null) {
      return await GenerateQuestion();
    }
    return [question, options];
  } catch (error) {
    console.warn(error);
    return await GenerateQuestion();
  }
}
