const Discord = require("discord.js");
const fs = require("fs");
const respect = require("../respect.json");

const claim_cooldown_time = 120;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  if (claim_talked_users.has(message.author.id)) return message.reply("you can only pay someone your respects every 2 hours.");
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!tUser) return message.reply(`please tag someone you wish to pay respects to. (Example: \`-dis <user>\`)`)
  if(tUser.id === message.author.id) return message.reply(`you **__can't__** pay respects to yourself...`)
  if(!respect[tUser.id]) {
		respect[tUser.id] = {
		  role: 'citizen',
		  respect: 2
	  };
	}
	if(!respect[message.author.id]) {
		respect[message.author.id] = {
		  role: 'citizen',
		  respect: 2
	  };
	}
 
	bot.channels.filter(c => c.name === `rep-logs`).forEach(channel => {
  	let resEmbed = new Discord.RichEmbed()
  	.setColor("#9b59b6")
  	.setDescription(`**__Respected:__**\n${tUser}: +25\n<@${message.author.id}>**: +5`)
  	channel.send(resEmbed)
	});
  
	
	let resGEmbed = new Discord.RichEmbed()
  .setColor("#c7ecee")
  .setDescription(`Thank you for respecting ${tUser}.`)
  message.channel.send(resGEmbed)
  
  respect[message.author.id].respect = respect[message.author.id].respect + 5
  respect[tUser.id].respect = respect[tUser.id].respect + 25
  
  claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 60000);
}

module.exports.help = {
  name: "res"
}
