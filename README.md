# Sample Discord.JS Bot
A Discord bot made by the VizuDev team for making the coding experience easier for beginners.

# Features
- Command handler w/ aliases
- Event handler
- Ready event with ASCII table with commands
- Ping command and user-friendly help command.

# Pre-installation requirements
- Node.js & NPM
- Basic knowledge of Node.js
- Git

# Installation

First, we clone this repository:
```bash 
$ git clone https://github.com/VizuDev/discord.js-sample-bot.git
```

Once it's cloned, just install the dependencies by using:
```bash
$ npm install
```

Now, the real fun starts.

# Configuration
You will need to check every file to have an idea on what to change, but here are some first steps:
- Go to the **config.json** file and modify the token and the prefix (if you don't know how to get your bot's token, just follow [this tutorial](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)).
- Go to the package.json file and modify the project's name, the version and anything else you want.
- Go to the final line of the src/index.js file and modify the client.setActivity line with the activity (status) you would like the bot to have.

# Starting up
Just run `node src/index.js`, and no error should appear.  
If there is any error, start a new issue or join our support server:  
    <a href="https://discord.gg/3xuwSU6"><img src="https://discordapp.com/api/guilds/530787984786587650/widget.png?style=banner4" alt="Join our support server"/></a>