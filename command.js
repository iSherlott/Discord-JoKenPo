// const viewGame = require("./embad/viewGame");
const viewGame = require("./views/viweGame");

module.exports = function game(message, choosePlay, player1, player2) {
  const game = ["pedra", "papel", "tesoura"];
  const result = [];
  result[0] = ["Draw", "Lose", "Win"];
  result[1] = ["Win", "Draw", "Lose"];
  result[2] = ["Lose", "Win", "Draw"];

  let choose_bot = Math.floor(Math.random() * game.length);
  let choose_play = game.indexOf(choosePlay);

  if (choose_play == -1) return;

  viewGame(
    message,
    result[choose_play][choose_bot],
    game[choose_play],
    game[choose_bot],
    player1,
    player2
  );
};
