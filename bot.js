const Discord = require("discord.js");
const client = new Discord.Client();

//for music command
const ytdl = require('ytdl-core');


client.on('ready', () => {
	console.log('')
	console.log('---------------------');
	console.log('Bot successfully started!');
	console.log('Logged in as: ' + client.user.tag); //client.user.username + "#" + client.user.discriminator); //ancient shit here
	console.log('');
	console.log('Bot made by Aeka');
	console.log('---------------------');
	console.log('')
	//client.user.setGame('!help') //set game
});


client.on("message", message => {

	if (message.author.bot) return;

if (message.content === '!play') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }





}); // Finish the message listener.






process.on('unhandledRejection', err => console.error(err))


client.login(process.env.token);
