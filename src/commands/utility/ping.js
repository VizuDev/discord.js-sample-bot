// Ping cmd

module.exports = {
    command: "ping",
    name: "Ping",
    category: "utility",
    description: "Pong! Shows client and api latency",
    usage: "ping",
    acessible: "Members",
    aliases: [""],
run: async (client, message) => {
    message.channel.send(`Command Latency: **${new Date().getTime() - message.createdTimestamp} ms**\nAPI Latency: **${client.ws.ping} ms**`)
}
}