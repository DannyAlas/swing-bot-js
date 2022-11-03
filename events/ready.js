module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache} servers for a total of ${client.users.cache.size} users`);
    client.user.setActivity(client.config.app.playing); 
};