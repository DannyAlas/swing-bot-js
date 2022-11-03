module.exports = {
    name: 'clear',
    description: "deletes a number of messages in the channel",
    voiceChannel: true,
    options: [
        {
            name: 'amount',
            description: 'number of messages to delete',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],
    async execute({ inter }) {
        const amount = inter.options.getString('amount');
        await inter.channel.bulkDelete(amount);
        await inter.reply({ content: `Deleted ${amount} messages!`});
    }
}