const dotenv = require("dotenv")
dotenv.config()

module.exports = {
    app: {
        token: $ENV_TOKEN,
        playing: 'Jazz',
        global: true,
        guild: '762098988592791552'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 110,
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