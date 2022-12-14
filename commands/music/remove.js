const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'remove',
    description: "remove a song from the queue",
    voiceChannel: true,
    options: [
        {
            name: 'name',
            description: 'the name/url of the song you wish to remove',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'the songs place in the queue',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const number =  inter.options.getNumber('number')
        const track = inter.options.getString('song');

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `You must input an option to remove a song ${inter.member}...`, ephemeral: true });

        if (track) {

        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.remove(song)
                return inter.reply({ content: `removed ${track} from the queue ✅` });
            }

        }

        return inter.reply({ content: `Could not find ${track} ${inter.member}... try using the url or the full name of the song`, ephemeral: true });    
        }

        if (number) {

            const index = number - 1
            const trackname = queue.tracks[index].title

            if (!trackname) return inter.reply({ content: `${trackname} dose not seem to exist, try copying the title,using its URL, or its place in the queue.`, ephemeral: true });   

            queue.remove(index);
            
            return inter.reply({ content: `removed ${trackname} from the queue` });
        }


         
    }
}