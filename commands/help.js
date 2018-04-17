const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
	message.reply(`I am privately messaging you all my commands.`)
    let botEmbed = new Discord.RichEmbed()
    .setColor('#fff200')
    .addField("Government Commands:", "`-respect`: shows your current respect status.\n`-pay`: lets you pay your respects to a user.\n`-announce`: lets you announce something.\n`-poll`: lets you make a poll.");
    message.author.send(botEmbed);
}

module.exports.help = {
  name: "help"
}
