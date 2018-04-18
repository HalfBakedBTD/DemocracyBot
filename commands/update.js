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
  let topIDTwo = message.author.id;
  let topIDThree = message.author.id;
  let topIDFour = message.author.id;
  let topIDFive = message.author.id;
  let topIDSix = message.author.id;
  let topIDSeven = message.author.id;
  let topIDEight = message.author.id;
  let topIDNine = message.author.id;
  let topIDTen = message.author.id;
  
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
	  respect[user.id] = {
			role: 'citizen',
			respect: uRep
		}
		if (uRep > top) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = topIDEight
			topNine = topEight
			topIDEight = topIDSeven
			topEight = topSeven
			topIDSeven = topIDSix
			topSeven = topSix
			topIDSix = topIDFive
			topSix = topFive
			topIDFive = topIDFour
			topFive = topFour
			topIDFour = topIDThree
			topFour = topThree
			topIDThree = topIDTwo
			topThree = topTwo
			topIDTwo = topID
			topTwo = top
			topID = user.id
			top = uRep
		} else if (uRep > topTwo) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = topIDEight
			topNine = topEight
			topIDEight = topIDSeven
			topEight = topSeven
			topIDSeven = topIDSix
			topSeven = topSix
			topIDSix = topIDFive
			topSix = topFive
			topIDFive = topIDFour
			topFive = topFour
			topIDFour = topIDThree
			topFour = topThree
			topIDThree = topIDTwo
			topThree = topTwo
			topIDTwo = user.id
			topTwo = uRep
		} else if (uRep > topThree) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = topIDEight
			topNine = topEight
			topIDEight = topIDSeven
			topEight = topSeven
			topIDSeven = topIDSix
			topSeven = topSix
			topIDSix = topIDFive
			topSix = topFive
			topIDFive = topIDFour
			topFive = topFour
			topIDFour = topIDThree
			topFour = topThree
			topIDThree = user.id
			topThree = uRep
		} else if (uRep > topFour) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = topIDEight
			topNine = topEight
			topIDEight = topIDSeven
			topEight = topSeven
			topIDSeven = topIDSix
			topSeven = topSix
			topIDSix = topIDFive
			topSix = topFive
			topIDFive = topIDFour
			topFive = topFour
			topIDFour = user.id
			topFour = uRep
		} else if (uRep > topFive) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = topIDEight
			topNine = topEight
			topIDEight = topIDSeven
			topEight = topSeven
			topIDSeven = topIDSix
			topSeven = topSix
			topIDSix = topIDFive
			topSix = topFive
			topIDFive = user.id
			topFive = uRep 
		} else if (uRep > topSix) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = topIDEight
			topNine = topEight
			topIDEight = topIDSeven
			topEight = topSeven
			topIDSeven = topIDSix
			topSeven = topSix
			topIDSix = user.id
			topSix = uRep
		} else if (uRep > topSeven) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = topIDEight
			topNine = topEight
			topIDEight = topIDSeven
			topEight = topSeven
			topIDSeven = user.id
			topSeven = uRep
		} else if (uRep > topEight) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = topIDEight
			topNine = topEight
			topIDEight = user.id
			topEight = uRep
		} else if (uRep > topNine) {
			topIDTen = topIDNine
			topTen = topNine
			topIDNine = user.id
			topNine = uRep
		} else if (uRep > topTen) {
			topIDTen = user.id
			topTen = uRep
		}
  });
	respect[topID] = {
	  role: 'president',
	  respect: top
	};
	respect[topIDTwo] = {
	  role: 'judge',
	  respect: topTwo
	};
	respect[topIDThree] = {
	  role: 'judge',
	  respect: topThree
	};
	respect[topIDFour] = {
	  role: 'judge',
	  respect: topFour
	};
	respect[topIDFive] = {
	  role: 'police',
	  respect: topFive
	};
	respect[topIDSix] = {
	  role: 'police',
	  respect: topSix
	};
	respect[topIDSeven] = {
	  role: 'police',
	  respect: topSeven
	};
	respect[topIDEight] = {
	  role: 'police',
	  respect: topEight
	};
	respect[topIDNine] = {
	  role: 'peacekeeper',
	  respect: topNine
	};
	respect[topIDTen] = {
	  role: 'peacekeeper',
	  respect: topTen
	};
	
	let topEmbed = new Discord.RichEmbed()
	.setColor('#9b59b6')
	.setDescription(`**__Updated Roles:__**\n**President** - <@${topID}>.\n**Judge** - <@${topIDTwo}>, <@${topIDThree}>, and <@${topIDFour}>.\n**Police** - <@${topIDFive}>, <@${topIDSix}>, <@${topIDSeven}>, and <@${topIDEight}>.\n**Peacekeeper** - <@${topIDNine}> and <@${topIDTen}>.`);
	message.channel.send(topEmbed);
}

module.exports.help = {
  name: "update"
}
