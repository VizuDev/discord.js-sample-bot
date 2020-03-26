// Our first command! It will be a very well-developed and functional help command.
// I will explain it with every detail

//First, we require readdirSync, path and config
const { readdirSync } = require('fs')
const path = require('path')
const config = require("../../config.json")

// Now, we require the MessageEmbed constructor from discord.js for making beautiful messages.
const {MessageEmbed} = require("discord.js")

module.exports = { // All of these properties should be added in every command
    command: "help", // The command itself
    name: "Help", // The name of the command. It can be whatever
    usage: "help [command]", // The usage without the prefix
    description: "Shows a list with all available commands", // The description of the commands
    category: "utility", // The category of the command (same name of the folder where it is)
    accessible: "Members", // Who can use the command?
run: async (client, message, args) => {
    // If the user didn't provide any arg, send a message with all

    if(!args[0]) {
        // As we did before with the command handler, we need to get all the commands' categories.
        const categories = readdirSync(path.join(__dirname, '../../commands/'))
        // We need to get the prefix too.
        const prefix = config.prefix

        let embed = new MessageEmbed()
        .setTitle(`List of available commands (${client.commands.size})`)
        .setColor(good)
        .setFooter(`Do ${prefix}help (command) for getting more information`)

        // For each category, we will add a field with the category's name and commands
        categories.forEach(category => {
            // We filter the commands by category
            const dir = client.commands.filter(c => c.category === category)
            // Now we set the first character of the category to be uppercase.
            const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)

            // Now we try the add the field
            try {
                embed.addField(`${capitalise} [${dir.size}]:`, dir.map(c => `${c.name}`).join(", "))
            } catch(e) {
                // If there's an error, console log it.
                console.log(e)
            }
        })
        // And finally we return the embed
        return message.channel.send(embed)
    }

    // If the user did provide args, execute this.
    if(args[0]) {
        // We get the command the user did provide.
        let usercmd = args.join(" ").toLowerCase()
        // Now we find a command with the same name as the user provided.
        let cmd = client.commands.find(c => c.name.toLowerCase() === usercmd)

        // If that command doesn't exist, we send an error message
        if(!cmd) {
            let embed = new MessageEmbed()
            .setTitle(`Error!`)
            .setDescription(`**ERROR:** The command ${usercmd} doesnt exist!\nRun \`${prefix}help\` for a list of available commands!`)
            .setColor(error)

            return message.channel.send(embed)
        }
        // If it does exist, continue with this code.

        // This is an embed with all the command's information.
        let embed = new MessageEmbed()
        .setTitle(`Information for command ${cmd.name}`)
        .addField(`Name`, cmd.name)
        .addField(`Description`, cmd.description)
        .addField(`Usage`, `${db.data().prefix}${cmd.usage}`)
        .addField(`Accessible by`, cmd.accessible)
        .addField(`Aliases`, `${cmd.aliases ? cmd.aliases.join(", ") : "None"}`) // If the command has aliases, write them all separated by commas, if it doesnt have any, write "None".
        .setColor(good)
        .setFooter(`In the usage field, arguments between round brackets are required, and arguments between square brackets are optional.`)
        return message.channel.send(embed)
    }
}
}
