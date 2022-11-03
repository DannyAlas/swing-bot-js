module.exports = {
    name: 'delete',
    description: 'deletes the queue',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        await queue.clear();

        inter.reply(`The queue has just been deleted`);
    },
};