const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
	message.reply(`I am privately messaging you all my commands.`)
  let botEmbed = new Discord.RichEmbed()
  .setColor('#fff200')
  .addField("Government Commands:", "`-me`: shows your current respect status.\n`-pay`: lets you pay your respects to a user.\n`-top`: shows top respected users.\n`-update`:  updates roles for all users.");
	message.author.send(botEmbed) 
  let botEmbed = new Discord.RichEmbed()
  .setColor('#e67e22')
  .addField("Links:", "[Invite](https://discordapp.com/oauth2/authorize?client_id=435913715016269826&permissions=8&scope=bot)");
	message.author.send(botEmbed)
}
	      
module.exports.help = {
  name: "help"
}
