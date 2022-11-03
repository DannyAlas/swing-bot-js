module.exports = {
    name: 'back',
    description: "Go back the song before",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing ${inter.member}...`, ephemeral: true });

        await queue.back();
    },
};