const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready and you know it :)')
})


client.on('message', message => {
    console.log(message.author.tag + ": " + message.content);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'kick') {
	if (!args.length) {
		return message.channel.send(`Please provide the name of the person you want to kick, ${message.author}!`);
	}
	else if (args[0] === 'help') {
		return message.channel.send(`${args[1]}`);
	}
    let member = message.mentions.members.first();
    let reason = args.splice(1).join(" ");
    let arg1 = args[0]
	member.kick().then((member) => {
        message.member.send(`You have been kicked for the following reason: "${reason}". If you want to join again, ask a member for an invite.`)
        console.log(arg1)
        message.channel.send(`:wave: ${member.displayName} has been kicked for "${reason}"`)
    })
}

})





// login
client.login(token);
