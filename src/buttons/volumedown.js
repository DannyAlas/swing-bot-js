const maxVol = client.config.opt.maxVol;

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing.`, ephemeral: true });

        const vol = Math.floor(queue.volume - 5)
        const success = queue.setVolume(vol);

}