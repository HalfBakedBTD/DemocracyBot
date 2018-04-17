const Discord = require("discord.js");
const fs = require("fs");
const respect = require("../respect.json");

const claim_cooldown_time = 120;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  if (claim_talked_users.has(message.author.id)) return message.reply("you can only pay someone your respects every 2 hours.");
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!tUser) return message.reply(`please tag someone you wish to pay respects to. (Example: \`-pay <user>\`)`)
  if(tUser.id === message.author.id) return message.reply(`you **__can't__** pay respects to yourself...`)
  if(!respect[tUser.id]) {
		respect[tUser.id] = {
		  role: 'citizen',
		  respect: 0
	    };
	}
 
  let resEmbed = new Discord.RichEmbed()
  .setColor("#9b59b6")
  .setDescription(`**${message.author.username}**, you have just paid respects to ${tUser}.`)
  message.channel.send(resEmbed)
  
  let resDMEmbed = new Discord.RichEmbed()
  .setColor("#9b59b6")
  .setDescription(`**${message.author.username}** has just paid you respects.`)
  tUser.send(resDMEmbed)
  
  
  
  respect[tUser.id].respect = respect[tUser.id].respect + 5
  
  claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 60000);
}

module.exports.help = {
  name: "pay"
}
