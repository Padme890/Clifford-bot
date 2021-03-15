const Discord = require('discord.js');
const client = new Discord.Client();
const Rules = new Discord.MessageEmbed()
.setColor('NOT_QUITE_BLACK')
.setTitle('Rules of the server')
.setDescription
('Rule 1 Keep it safe for work Rule 2 Nothing illegal Rule 3 Dont be a dick Rule 4 Dont be a dick return of the prick Rule 5 Keep it organized Rule 6 Respect Everyones privacy Rule 7 No suicidal or self harm comments Rule 8 No spam Rule 9 No self promo Rule 10 Speak English Rule 11 Respect staff Rule 12 Equal opprotunity Rule 13 No false reports Rule 14 Read the manual Rule 15 No discrimination Rule 16 No bot spam in non bot spam channels')

client.on('message', message => {
	if (message.content === '.rules') {
		message.channel.send(Rules);
	}
});
client.login('Nzk2OTY1ODk4Njc4MDQyNjM0.X_fmVQ.33SJvSXdS5RCYRd5zL6Z57rFCNA');