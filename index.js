const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Bot has been planted, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); //Indique que le Bot a démarré dans le fichier du log.
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`) //Définit l'activitée du Bot.
});

client.login(process.env.TOKEN); //Se connecter.
