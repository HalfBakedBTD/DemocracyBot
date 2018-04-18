const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const respect = require("./respect.json");

const respectCT = 15;
const respectCooldown = new Set();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setGame(`on ${bot.guilds.size} servers! | -help`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  
  if(!respect[message.author.id]) {
	  respect[message.author.id] = {
		  role: 'citizen',
		  respect: 2
	  };
  }
  
  if (!message.content.startsWith(`-`)) {
	if (respectCooldown.has(message.author.id)) return;
  }
  
  if (!message.content.startsWith(`-`)) {
	  respect[message.author.id].respect = respect[message.author.id].respect + 0.025
		if (respect[message.author.id].respect > 25) {
			if (respect[message.author.id].role === 'citizen') {
				respect[message.author.id].role = 'peacekeeper'
				let promoEmbed = new Discord.RichEmbed()
  			.setColor("#ecf0f1")
  			.setDescription(`**${message.author.username}**, have just gained \`peacekeeper\` role. You can now use the \`mute\` command.`)
  			message.channel.send(promoEmbed)
			}
		}
		if (respect[message.author.id].respect < 25) {
			if (respect[message.author.id].role === 'peacekeeper') {
				respect[message.author.id].role = 'citizen'
				let promoEmbed = new Discord.RichEmbed()
  			.setColor("#ecf0f1")
  			.setDescription(`**${message.author.username}**, have just lost \`peacekeeper\` role. You can no longer use the \`mute\` command.`)
  			message.channel.send(promoEmbed)
			}
		}
		if (respect[message.author.id].respect > 40) {
			if (respect[message.author.id].role === 'peacekeeper') {
				respect[message.author.id].role = 'police'
				let promoEmbed = new Discord.RichEmbed()
  			.setColor("#ecf0f1")
  			.setDescription(`**${message.author.username}**, have just gained \`police\` role. You can now use the \`kick\` command.`)
  			message.channel.send(promoEmbed)
			}
		}
		if (respect[message.author.id].respect < 40) {
			if (respect[message.author.id].role === 'police') {
				respect[message.author.id].role = 'peacekeeper'
				let promoEmbed = new Discord.RichEmbed()
  			.setColor("#ecf0f1")
  			.setDescription(`**${message.author.username}**, have just lost \`police\` role. You can no longer use the \`kick\` command.`)
  			message.channel.send(promoEmbed)
			}
		}
		if (respect[message.author.id].respect > 100) {
			if (respect[message.author.id].role === 'police') {
				respect[message.author.id].role = 'judge'
				let promoEmbed = new Discord.RichEmbed()
  			.setColor("#ecf0f1")
  			.setDescription(`**${message.author.username}**, have just gained \`judge\` role. You can now use the \`ban\` command.`)
  			message.channel.send(promoEmbed)
			}
		}
		if (respect[message.author.id].respect < 100) {
			if (respect[message.author.id].role === 'judge') {
				respect[message.author.id].role = 'police'
				let promoEmbed = new Discord.RichEmbed()
  			.setColor("#ecf0f1")
  			.setDescription(`**${message.author.username}**, have just lost \`judge\` role. You can no longer use the \`ban\` command.`)
  			message.channel.send(promoEmbed)
			}
		}
		if (respect[message.author.id].respect > 400) {
			if (respect[message.author.id].role === 'judge') {
				respect[message.author.id].role = 'peacekeeper'
				let promoEmbed = new Discord.RichEmbed()
  			.setColor("#ecf0f1")
  			.setDescription(`**${message.author.username}**, have just gained \`president\` role. You can now use all commands.`)
  			message.channel.send(promoEmbed)
			}
		}
		if (respect[message.author.id].respect < 400) {
			if (respect[message.author.id].role === 'president') {
				respect[message.author.id].role = 'judge'
				let promoEmbed = new Discord.RichEmbed()
  			.setColor("#ecf0f1")
  			.setDescription(`**${message.author.username}**, have just lost \`president\` role. You can no longer use all commands.`)
  			message.channel.send(promoEmbed)
			}
		}
  }
  
  if (!message.content.startsWith(`-`)) {  
	respectCooldown.add(message.author.id);
		setTimeout(() => {
		respectCooldown.delete(message.author.id);
		}, respectCT * 1000);
  }

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith(`${prefix}`)) {
    return
  }
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
});

bot.login(botconfig.token);
//bot.login(tokens.token);
