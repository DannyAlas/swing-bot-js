const ms = require('ms');
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'seek',
    description: 'fast forward or rewind the song by a specific amount of time',
    voiceChannel: true,
    options: [
    {
        name: 'time',
        description: 'time that you want to fast forward or rewind',
        type: ApplicationCommandOptionType.Number,
        required: true,
    }
    ],
    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing ${inter.reply}`, ephemeral: true });

        const timeToMS = ms(inter.options.getNumber('time'));

        if (timeToMS >= queue.current.durationMS) return inter.reply({ content:`The indicated time is higher than the total time left ${inter.member}\n*Try for example a valid time like **5s, 10s, 20 seconds, 1m**...*`, ephemeral: true });

        await queue.seek(timeToMS);

        inter.reply({ content: `Time set on the current song **${ms(timeToMS, { long: true })}** ✅`});
    },
};