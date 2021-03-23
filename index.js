const Discord = require('discord.js');
const client = new Discord.Client;
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log('Tutorial bot has landed on discord :)');
});

client.login(token);