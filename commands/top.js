const Discord = require("discord.js");
const respect = require("../respect.json");

exports.run = async (bot, message, args) => {
  if(!respect[message.author.id]) {
	    respect[message.author.id] = {
		  role: 'citizen',
		  respect: 0
	  };
  }
  let topID = message.author.id;
  let topIDTwo = 0;
  let topIDThree = 0;
  let topIDFour = 0;
  let topIDFive = 0;
  let topIDSix = 0;
  let topIDSeven = 0;
  let topIDEight = 0;
  let topIDNine = 0;
  let topIDTen = 0;
  
  let top = respect[message.author.id].respect;
  let top = 0;
  let top = 0;
  let top = 0;
  let top = 0;
  let top = 0;
  let top = 0;
  let top = 0;
  let top = 0;
  let top = 0;
  bot.users.filter(u => u.id !== `${message.author.id}`).forEach(user => {
  if(!respect[user.id]) {
    respect[user.id] = {
      role: 'citizen',
		  respect: 0
    };
  }

}

module.exports.help = {
  name: "top"
}
