module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing`, ephemeral: true });
    
    const success = queue.skip();
}