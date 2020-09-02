const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const prefix = "!";
client.on("message", function(message) { 
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return; 

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase(); 



  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);                       
  }       
  else if (command === "add") {
    var link = "";
    var title = "";
    var linkindex;
    for (i = 0; i < args.length; i++) {
      if (args[i].startsWith("http") || args[i].startsWith("www")) {
        link = args[i];
        linkindex = i;
	break
      }
      else {
        title = title + " " + args[i];
      }
    }
    if ((args.length - 1) == (linkindex + 1))
    {
      var username = args[linkindex + 1];
      var author = client.users.cache.find(u => u.tag === username).id;
    }
    else
    {
      var author = message.author.id;
    }
    
    if (args.length >= 2) {
    message.delete({ timeout: 100 }); 
    client.channels.cache.get('750802687280414771').send(`${title}: ${link}
Thank you <@${author}>!`);
    }                          
  }



                               
});

client.login(config.BOT_TOKEN);
