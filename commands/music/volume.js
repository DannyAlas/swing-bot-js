const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'adjust volume',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'the amount to adjust',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `The volume has been adjusted to **${vol}**/**${maxVol}**% 🔊` : `Something went wrong ${inter.member}... try again?`});
    },
};