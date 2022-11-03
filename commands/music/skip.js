module.exports = {
    name: 'skip',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`No music currently playing ${inter.member}`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `${queue.current.title} skipped ✅` : `Something went wrong ${inter.member}... try again?`});
    },
};