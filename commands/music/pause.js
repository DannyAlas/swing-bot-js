module.exports = {
    name: 'pause',
    description: 'pause the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: `The track is already paused ${inter.member}`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `Current track ${queue.current.title} paused` : `Something went wrong ${inter.member}... try again?` });
    },
};