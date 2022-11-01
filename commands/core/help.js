const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "All the commands this bot has!",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);
        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('Here are all my commands! Message <@534414978195783754> for further help')
        .addFields([ { name: `use \`/\` to pop up the command helper`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setFooter({ text: `Requested by ${inter.user.username}`, })


        inter.reply({ embeds: [embed] });
    },
};