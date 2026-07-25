const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.TOKEN;

client.once("ready", () => {
  console.log(`TERA is online as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const command = message.content.trim().toLowerCase();

  if (command === "-ألعاب") {
    return message.reply(
      "ألعاب TERA:\n\n" +
      "-روليت\n" +
      "-نرد\n" +
      "-ارقام\n" +
      "-xo\n" +
      "-تخمين\n" +
      "-سؤال\n" +
      "-مسابقة\n" +
      "-كلمة\n" +
      "-حروف\n" +
      "-ذاكرة\n" +
      "-صح\n" +
      "-قاتل\n" +
      "-محقق\n" +
      "-اختيار\n" +
      "-تصويت\n" +
      "-صراحة\n" +
      "-تحدي\n" +
      "-حظ\n" +
      "-مين\n" +
      "-حكم\n" +
      "-مافيا"
    );
  }

  if (command === "-نرد") {
    const number = Math.floor(Math.random() * 6) + 1;
    return message.reply(`نتيجة النرد: ${number}`);
  }

  if (command === "-عملة") {
    const result = Math.random() < 0.5 ? "وجه" : "كتابة";
    return message.reply(`النتيجة: ${result}`);
  }

  if (command === "-حظ") {
    const results = [
      "حظك اليوم ممتاز",
      "حظك اليوم جيد",
      "حظك اليوم عادي",
      "حظك اليوم سيئ"
    ];

    const result = results[Math.floor(Math.random() * results.length)];
    return message.reply(result);
  }

  if (command === "-اختيار") {
    const members = message.guild.members.cache.filter(
      (member) => !member.user.bot
    );

    if (members.size === 0) {
      return message.reply("ماكو لاعبين متاحين.");
    }

    const randomMember =
      members.random();

    return message.reply(
      `تم اختيار: ${randomMember}`
    );
  }
});

client.login(TOKEN);
