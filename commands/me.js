const Discord = require("discord.js");
const respect = require("../respect.json");

exports.run = async (bot, message, args) => {
	let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if(!respect[message.author.id]) {
	    respect[message.author.id] = {
		  role: 'citizen',
		  respect: 2
	    };
    }
	if (!tUser) {
		let workedEmbed = new Discord.RichEmbed()
		.setColor('#9b59b6')
		.setDescription(`I have sent you a DM with your stats.`);
		message.channel.send(workedEmbed);
		let botEmbed = new Discord.RichEmbed()
		.setColor('#2ecc71')
		.setDescription(`**__Your Stats:__**\n**Role:** ${respect[message.author.id].role}\n**Respect:** ${respect[message.author.id].respect}`);
		message.author.send(botEmbed);
		return;
	}
	if(!respect[tUser.id]) {
		respect[tUser.id] = {
		  role: 'citizen',
		  respect: 2
	    };
	}
	let workedEmbed = new Discord.RichEmbed()
	.setColor('#9b59b6')
	.setDescription(`I have sent you a DM with ${tUser}'s stats.`);
	message.channel.send(workedEmbed);
	let botEmbed = new Discord.RichEmbed()
	.setColor('#2ecc71')
	.setDescription(`**__${tUser}'s Stats:__**\n**Role:** ${respect[tUser.id].role}\n**Respect:** ${respect[tUser.id].respect}`);
	message.author.send(botEmbed);
	return;
}

module.exports.help = {
  name: "me"
}
