module.exports = {
    name: 'resume',
    description: 'resumes the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}`, ephemeral: true });

        const success = queue.setPaused(false);

    },
};
