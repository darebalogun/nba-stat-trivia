export default function GenerateQuestion() {
  return fetch(
    "http://data.nba.net/data/10s/prod/v1/2019/teams/bucks/leaders.json"
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json.league.standard.ppg);
    })
    .catch((error) => {
      console.error(error);
    });
}
