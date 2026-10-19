const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`הבוט מחובר בהצלחה בתור: ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'ping') {
        await interaction.reply({ content: '🏓 פונג!', ephemeral: true });
    }
});

// התחברות בעזרת ה-Token שהגדרת ב-Railway
client.login(process.env.DISCORD_TOKEN);
