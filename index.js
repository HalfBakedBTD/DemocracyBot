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
