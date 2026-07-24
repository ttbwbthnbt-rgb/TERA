const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once('ready', () => {
  console.log(`TERA is online as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!tera') {
    message.reply('🔥 TERA جاهز للعمل!');
  }

  if (message.content === '!tr') {
    message.reply('💰 رصيدك الحالي: 0 TR');
  }

  if (message.content === '!level') {
    message.reply('⭐ مستواك الحالي: 1 | XP: 0');
  }
});

client.login(process.env.TOKEN);
