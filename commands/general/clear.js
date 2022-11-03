const { ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    name: 'clear',
    description: "clear a number of messages from the channel",
    voiceChannel: false,
    options: [
        {
            name: 'amount',
            type: ApplicationCommandOptionType.Integer,
            description: 'number of messages to delete',
            min_value: 1,
            required: true,
        }
    ],
    async execute({ inter }) {
        const amount = inter.options.getString('amount');
        await inter.channel.bulkDelete(amount, true);
        await inter.reply({ content: `Deleted ${amount} messages!`, ephemeral: true});

    }
}