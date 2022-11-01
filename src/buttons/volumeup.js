const maxVol = client.config.opt.maxVol;
module.exports = async ({  inter, queue }) => { 
   
    const vol = Math.floor(queue.volume + 5)
    const success = queue.setVolume(vol);

}