const Discord = require("discord.js");
const respect = require("../respect.json");

exports.run = async (bot, message, args) => {
  if(!respect[message.author.id]) {
	  respect[message.author.id] = {
		  role: 'citizen',
		  respect: 2
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
  let topTwo = 0;
  let topThree = 0;
  let topFour = 0;
  let topFive = 0;
  let topSix = 0;
  let topSeven = 0;
  let topEight = 0;
  let topNine = 0;
  let topTen = 0;
  bot.users.filter(u => u.id !== `${message.author.id}`).forEach(user => {
    if(!respect[user.id]) {
      respect[user.id] = {
        role: 'citizen',
	      respect: 2
      };
    }
		let uRep = respect[user.id].respect;
		if (uRep > top) {
			topIDTwo = topID
			topTwo = top
			topID = user.id
			top = uRep
		}
  }

}

module.exports.help = {
  name: "top"
}
