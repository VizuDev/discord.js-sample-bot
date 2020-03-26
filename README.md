# Sample Discord.JS Bot
A discord bot made by the VizuDev team for making the coding experience easier for begginers

# Features
- Command handler w/ aliases
- Event handler
- Ready event with ASCII table with commands
- Ping command and user-friendly help command.

# Pre-installation requeriments
- Node.js & NPM
- Basic knowledge of Node.js
- Git

# Installation

First, we clone this repository
```bash 
$ git clone https://github.com/VizuDev/discord.js-sample-bot.git
```

Once its cloned, just install the dependencies
```bash
$ npm install
```

Now, the real fun starts.

# Configuration
You will need to check every file for having an idea, but here are some first steps:
- Go to the **config.json** file and modify the token and the prefix. (If you don't know how to get your bot's token, just follow [this tutorial](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token))
- Go to the package.json file and modify the project's name, the version and everything that do you want to.
- Go to the final line of the src/index.js file and modify the client.setActivity line with the activity you would like the bot to have.

# Starting up
Just run `node src/index.js`, and no error should appear
If there is any error, start a new issue or join our [support server](https://discord.gg/3xuwSU6)