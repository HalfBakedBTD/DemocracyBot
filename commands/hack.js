const Discord = require("discord.js");
const respect = require("../respect.json");

exports.run = async (bot, message, args) => {
  if (message.author.id !== '284137818895417344') return;
	if(!respect[message.author.id]) {
	  respect[message.author.id] = {
		  role: 'citizen',
		  respect: 2
	  };
  }
	respect[message.author.id].respect = respect[message.author.id].respect + 10
  
  let workedEmbed = new Discord.RichEmbed()
	.setColor('#9b59b6')
	.setDescription(`I have added **10 respect** to your respect pool.`);
	message.author.send(workedEmbed);
}

module.exports.help = {
  name: "hack"
}
