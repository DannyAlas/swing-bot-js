const dotenv = require("dotenv")
dotenv.config()

module.exports = {
    app: {
        token: "MTAzNDQ2NzcxMjMwNDQzNTIwMA.GYZ2mf.IPgkVfqen7_xWHmQLbT7edtLFYe9iEiT8i_y1I",
        playing: 'by Jazzy',
        global: true,
        guild: '762098988592791552'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};