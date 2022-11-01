require('dotenv').config()
module.exports = {
    app: {
        token: JSON.stringify(process.env.ENV_TOKEN),
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
