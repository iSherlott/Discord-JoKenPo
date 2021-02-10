const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix, channel } = require("./config.json");
const game = require("./command");

client.on("ready", () => {
  console.log("JoKenPo Online!");
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.channel.id == channel) {
    const command = message.content.toLowerCase().split(" ");

    if (command[0] == prefix) {
      game(message, command[1].toLowerCase(), message.author.username, `Aisha`);
    }
  }
});

client.login(token);
