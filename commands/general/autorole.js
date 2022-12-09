const { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
module.exports = {
    name: 'autorole',
    description: "set the role to be given to new members",
    voiceChannel: false,
    options: [
        {
            name: 'role',
            type: ApplicationCommandOptionType.Role,
            description: 'role to give to new members',
            required: true,
        }
    ],
    PermissionStatus: PermissionFlagsBits.MANAGE_ROLES,
    async execute({ inter }) {
        const role = inter.options.getRole('role');
        const guild = inter.guild;
        const guildData = await guild.client.db.guilds.findOne({ guildId: guild.id });
        guildData.autorole = role.id;
        await guildData.save();
        await inter.reply({ content: `Set autorole to ${role.name}`, ephemeral: true});

    }
}