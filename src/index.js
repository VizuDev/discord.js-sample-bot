// First, we require discord.js's Client and Collection constructors
const { Client, Collection } = require("discord.js")
// Now, we initialize a new discord.js Client
const client = new Client()

// Now, we need to require fs (FileSystem) for assigning commands, events, etc...
const fs = require('fs')

// Next, require our config.json file containing the bot's token 
const config = require("config.json")

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


