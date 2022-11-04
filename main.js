const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require("dotenv").config();
console.log(process.env.TOKEN);
global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
client.login(client.config.app.token);