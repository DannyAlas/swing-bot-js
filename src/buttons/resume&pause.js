module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    
    return inter.reply({ content: `${success ? `Current track ${queue.current.title} paused` : `Current track ${queue.current.title} resumed`}`, ephemeral: true});
}