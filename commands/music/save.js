const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'save',
    description: 'messages you the current track',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `No music is currently playing ${inter.member}`, ephemeral: true });

        inter.member.send({
            embeds: [
                new EmbedBuilder()
                    .setColor('Red')
                    .setTitle(`:arrow_forward: ${queue.current.title}`)
                    .setURL(queue.current.url)
                    .addFields(
                        { name: ':hourglass: Duration:', value: `\`${queue.current.duration}\``, inline: true },
                        { name: 'Song by:', value: `\`${queue.current.author}\``, inline: true },
                        { name: 'Views :eyes:', value: `\`${Number(queue.current.views).toLocaleString()}\``, inline: true },
                        { name: 'Song URL:', value: `\`${queue.current.url}\`` }
                    )
                    .setThumbnail(queue.current.thumbnail)
                    .setFooter({text:`from ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false })})
            ]
        }).then(() => {
            return inter.reply({ content: `I've messaged you the song ;)`, ephemeral: true });
        }).catch(error => {
            return inter.reply({ content: `I couldn't send the song, try again`, ephemeral: true });
        });
    },
};