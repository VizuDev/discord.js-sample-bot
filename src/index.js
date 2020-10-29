// This will check if the node version you are running is the required
// Node version or higher, if it isn't it will throw the following error to inform you.
if (Number(process.version.slice(1).split(".")[0]) < 12) throw new Error("Node 12.0.0 or higher is required. You need to update your Node.js to the required release, or a newer one.");

// First, we require discord.js's Client and Collection constructors
const { Client, Collection } = require("discord.js")
// Now, we initialize a new discord.js Client
const client = new Client()

// Now, we need to require fs (FileSystem) for assigning commands, events, etc...
const fs = require('fs')

// Next, require our config.json file containing the bot's token 
const config = require("./config.json")

// Now, we create 2 Collections; Commands and Aliases. This are the roots of our command handler
client.commands = new Collection()
client.aliases = new Collection()

["aliases", "commands"].forEach(x => (client[x] = new Collection()))

// Loading handlers
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client)
})

// Finally, we login and set an activity
client.login(config.token).then(client.user.setActivity("Under Developement", {type: "PLAYING"}))


