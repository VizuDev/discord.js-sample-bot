// Now, this is literally the most important event. Keep track of everything i say.

// Get the config.json file for the prefix
const config = require("../../config.json")

module.exports = async (client, message) => {

    // First, we check if the author of the message is a bot or if the command is being executed through dm
    // If it does, we end the event
    if (message.author.bot || message.channel.type === "dm") return

    const prefix = config.prefix

    // Now we define the arguments and the cmd
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()

    // Now we check if the command starts with the PREFIX
    // If it doesn't, stop the command's execution
    if(message.content.startsWWith(prefix)) return;
    // we define the command file
    let cmdfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    // if the commandfile exists, execute the command
    if(cmdfile) {
        // Try to execute it, if it catchs an error, console.log it
        try {
            cmdfile.run(client, message, args)
        } catch(error) {
            console.log(error)
        }
    }

}