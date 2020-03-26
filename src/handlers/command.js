// Command Handler. We start reqiring fs, ascii tables and path
const { readdirSync } = require('fs')
const ascii = require('ascii-table')
const path = require('path')

// Initializing the table
const table = new ascii("Commands")
table.setHeading("Commands", "Load Status")

// Now, we will really work with the command handler
module.exports = client => {
    // Lets get all the subfolders of the "commands" folder
    const load = dirs => {
        const commands = readdirSync(path.join(__dirname, `../commands/${dirs}/`)).filter(d => d.endsWith(".js"))

        for (let file of commands) {
            // Now, we will get every command from every subfolder
            let pull = require(`../commands/${dirs}/%{file}`)
            // We check if the command has a configuration
            if(pull.name) {
                // If it does, add a row to the table and finally set the command
                table.addRow(file, '✔️')
                client.commands.set(pull.command, pull);
            } else {
                // If the command doesn't have a valid configuration, add another row showing the error
                table.addRow(file, `❌ --> Missing help.name or help.name is not a string`)
                continue;
            }

            // Now we will check for existing aliases in the command's config
            if (pull.aliases) {
                // For each one, set a command too
                pull.aliases.forEach(a => client.aliases.set(a, pull.command))
            }
        }
    }
    // For each folder of commands you have, add its name to this array
    ["utility"].forEach(c => load(c))
    // Now log the table
    console.log(table.toString())
}