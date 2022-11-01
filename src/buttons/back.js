module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `This is the first song ${inter.member}`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`Playing the **previous** track`, ephemeral: true});
}
