const Discord = require("discord.js");
const client = new Discord.Client();
const Jimp = require("jimp");

function nameLength(name) {
  if (name.length > 11) return name.substr(0, 11);
  else return name;
}

module.exports = async (message, result, play, bot, player1, player2) => {
  this.player1 = nameLength(player1.toLowerCase());
  this.player2 = nameLength(player2.toLowerCase());
  let font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);

  let frame = await Jimp.read(`./assets/${play}_x_${bot}.png`);

  frame.print(await font, 55, 80, this.player1);

  frame.print(font, 890, 80, this.player2);

  let fontResult = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
  frame.print(fontResult, 450, 245, result).write("./views/result_jokenpo.png");

  await message.channel.send(``, {
    files: ["./views/result_jokenpo.png"],
  });
};
