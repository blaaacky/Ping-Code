const { PREFIX } = require("../../config");
const Discord = require('discord.js');


module.exports = {
  config: {
    name: 'ping',
    description: 'ping command',
        aliases: ["ping"],
        usage: '!ping',
        accessableby: "",
  },
  run: async (bot, message, args) => {
    
    
    if(message.author.bot || message.channel.type === "dm") return
    
    
    
    
if(message.content.toLowerCase() === `${PREFIX}ping`) {
  
  message.lineReply(`> **Looking For Bot Ping..**`).then(message => {
    message.edit(`> **Bot Ping Is ${bot.ws.ping}Ms!**`)
  })
  
  
  
  
}
  }
}
