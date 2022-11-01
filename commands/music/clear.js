module.exports = {
    name: 'clear',
    description: 'clear all the music in the queue',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        await queue.clear();

        inter.reply(`The queue has just been cleared`);
    },
};