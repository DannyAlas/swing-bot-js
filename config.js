const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
module.exports = {
    app: {
        token: process.env.TOKEN,
        playing: 'Jazz',
        global: true,
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 150,
        leaveOnEnd: false,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 100,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};