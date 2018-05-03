const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
	message.reply(`I am privately messaging you all my commands.`)
  let botEmbed = new Discord.RichEmbed()
  .setColor('#fff200')
  .addField("Government Commands:", "`-me`: shows your current respect status.\n`-res`: lets you respect a user giving them and yourself more respect.\n`-dis` - disgracess a user taking away respect.\n`-top`: shows top respected users.\n`-update`:  updates roles for all users.");
	message.author.send(botEmbed) 
  let linkEmbed = new Discord.RichEmbed()
  .setColor('#e67e22')
  .addField("Links:", "[Invite](https://discordapp.com/oauth2/authorize?client_id=435913715016269826&permissions=8&scope=bot) | [Donate](https://www.patreon.com/halfbakedpatreon)");
	message.author.send(linkEmbed)
}
	      
module.exports.help = {
  name: "help"
}
