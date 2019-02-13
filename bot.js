const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("545186396009267211")
setInterval(function() {
channel.send(`spam spam sppam spamspam spam spam spam spam spam spamspam spam spam spam spam spam spam
spam spam spam spam spam spam spamspam spam spam spam spam spam spamspam spam spam spam spam spam spamspam spam spam spam spam spam spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
