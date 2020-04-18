export function GetPlayerName(year, playerID) {
  let jsons = {
    "2015": require(".././data/2015.json"),
    "2016": require(".././data/2016.json"),
    "2017": require(".././data/2017.json"),
    "2018": require(".././data/2018.json"),
    "2019": require(".././data/2019.json"),
  };

  function GetPlayer() {
    let players = jsons[year].league.standard;
    let player = players.filter(function (players) {
      return players.personId == playerID;
    });
    let playerName = player[0].firstName + " " + player[0].lastName;

    let otherPlayers = players.filter(function (players) {
      return players.teamId == player[0].teamId;
    });

    otherPlayers = otherPlayers.filter(function (otherPlayers) {
      return otherPlayers.personId != player[0].personId;
    });

    shuffle(otherPlayers);

    console.log(otherPlayers.length);
    try {
      let otherPlayerName1 =
        otherPlayers[0].firstName + " " + otherPlayers[0].lastName;
      let otherPlayerName2 =
        otherPlayers[1].firstName + " " + otherPlayers[1].lastName;

      let options = [
        {
          name: playerName,
          correct: true,
          key: "1",
        },
        {
          name: otherPlayerName1,
          correct: false,
          key: "2",
        },
        { name: otherPlayerName2, correct: false, key: "3" },
      ];

      shuffle(options);

      return options;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  return GetPlayer();
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
