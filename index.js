const { Client, Intents, MessageEmbed } = require("discord.js");
const cron = require("node-cron");
const dotenv = require('dotenv');
dotenv.config();
const botToken = process.env.DISCORD_TOKEN;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const eventJson = [
  // Daily reset
  {
    cron: "00 3 * * 1,2,3,4,5,6,7",
    msg: {
      title: "Новий день!",
      desc: "Новий день на сервері. Можна знов робити дейлікі.",
      color: "#FD0061",
    },
  },

  // Shadow lottery
  // {
    // cron: "0 12 * * 1,2,3,4,5,6",
    // msg: {
      // title: "Лотерея тіней",
      // desc: "Лотерея тіней почалася!",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "0 18 * * 1,2,3,4,5,6",
    // msg: {
      // title: "Лотерея тіней",
      // desc: "Лотерея тіней почалася!",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "0 21 * * 1,2,3,4,5,6",
    // msg: {
      // title: "Лотерея тіней",
      // desc: "Лотерея тіней почалася!",
      // color: "#A652BB",
    // },
  // },

  // Shadow contracts
  // {
    // cron: "0 3 * * 1,2,3,4,5,6",
    // msg: {
      // title: "Контракт тіней",
      // desc: "1 контракт тіней знов готовий до виконання у бармена!",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "0 3 * * 7",
    // msg: {
      // title: "Контракт тіней",
      // desc: "3 контракти тіней знов готові до виконання у бармена!",
      // color: "#A652BB",
    // },
  // },

  // Vault raid
  {
    cron: "55 11 * * 1,2,3,4,5,6,7",
    msg: {
      title: "Пограбування скарбниці",
      desc: "Через 5 хвилин пограбування! Підготуйтесь!",
      color: "#A652BB",
    },
  },
  {
    cron: "55 18 * * 1,2,3,4,5,6,7",
    msg: {
     title: "Пограбування скарбниці",
      desc: "Через 5 хвилин пограбування! Підготуйтесь!",
      color: "#A652BB",
    },
  },
  {
    cron: "0 12 * * 1,2,3,4,5,6,7",
    msg: {
      title: "Пограбування скарбниці",
      desc: "Треба захистити скарби! Всі на захист!",
      color: "#A652BB",
    },
  },
  {
    cron: "0 19 * * 1,2,3,4,5,6,7",
    msg: {
      title: "Пограбування скарбниці",
      desc: "Треба захистити скарби! Всі на захист!",
      color: "#A652BB",
    },
  },
  //Corvus expedition
  {
    cron: "0 21 * * 1,3,5",
    msg: {
      title: "Експедиція Корвус",
      desc: "Експедиція Корвус почалась.",
      color: "#A652BB",
    },
  },

  // Shadow assembly
  // {
    // cron: "0 18 * * 1,2,3,4,5,6",
    // msg: {
      // title: "Зібрання тіней",
      // desc: "Зібрання тіней почалося. Отримайте 4 благословення Акіми",
      // color: "#A652BB",
    // },
  // },

  // Rite of exile
  // {
    // cron: "45 19 * * 7",
    // msg: {
      // title: "Обряд Вигнанців",
      // desc: "Обряд Вигнанців через 15 хв.",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "50 19 * * 7",
    // msg: {
      // title: "Обряд Вигнанців",
      // desc: "Обряд Вигнанців через 10 хв.",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "55 19 * * 7",
    // msg: {
      // title: "Обряд Вигнанців",
      // desc: "Обряд Вигнанців через 5 хв.",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "0 20 * * 7",
    // msg: {
      // title: "Обряд Вигнанців",
      // desc: "Обряд Вигнанців стартував. Гуд лак бойз!",
      // color: "#A652BB",
    // },
  // },

  // Shadow War
  // {
    // cron: "45 18 * * 4,6",
    // msg: {
      // title: "Битва тіней",
      // desc: "Битва тіней через 15 хв.",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "50 18 * * 4,6",
    // msg: {
      // title: "Битва тіней",
      // desc: "Битва тіней через 10 хв.",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "55 18 * * 4,6",
    // msg: {
      // title: "Битва тіней",
      // desc: "Битва тіней через 5 хв.",
      // color: "#A652BB",
    // },
  // },
  // {
    // cron: "0 19 * * 4,6",
    // msg: {
      // title: "Битва тіней",
      // desc: "Битва тіней стартувала. Гуд лак бойз!",
      // color: "#A652BB",
    // },
  // },

  // Battlegrounds
  {
    cron: "0 8 * * 1,2,3,4,5,6,7",
    msg: {
      title: "Поле битви",
      desc: "Поле битви стартувало. За перші 3 бої в день на тебе чекають нагороди.",
      color: "#F8C300",
    },
  },
  {
    cron: "0 12 * * 1,2,3,4,5,6,7",
    msg: {
      title: "Поле битви",
      desc: "Поле битви стартувало. За перші 3 бої в день на тебе чекають нагороди.",
      color: "#F8C300",
    },
  },
  {
    cron: "0 18 * * 1,2,3,4,5,6,7",
    msg: {
      title: "Поле битви",
      desc: "Поле битви стартувало. За перші 3 бої в день на тебе чекають нагороди.",
      color: "#F8C300",
    },
  },
  {
    cron: "0 22 * * 1,2,3,4,5,6,7",
    msg: {
      title: "Поле битви",
      desc: "Поле битви стартувало. За перші 3 бої в день на тебе чекають нагороди.",
      color: "#F8C300",
    },
  },

  // Zone events

  // Haunted Carriage
  {
    cron: "55 11 * * 2,6",
    msg: {
      title: "Примарний диліжанс",
      desc: "Примарний диліжанс стартує за 5 хв. на Ешвольдському цвинтарі",
      color: "#00D166",
    },
  },
  {
    cron: "0 12 * * 2,6",
    msg: {
      title: "Примарний диліжанс",
      desc: "Примарний диліжанс стартував. на Ешвольдському цвинтарі",
      color: "#00D166",
    },
  },
  {
    cron: "25 20 * * 2,6",
    msg: {
      title: "Примарний диліжанс",
      desc: "Примарний диліжанс стартує за 5 хв. на Ешвольдському цвинтарі",
      color: "#00D166",
    },
  },
  {
    cron: "30 20 * * 2,6",
    msg: {
      title: "Примарний диліжанс",
      desc: "Примарний диліжанс стартував. на Ешвольдському цвинтарі",
      color: "#00D166",
    },
  },
  {
    cron: "55 21 * * 2,6",
    msg: {
      title: "Примарний диліжанс",
      desc: "Примарний диліжанс стартує за 5 хв. на Ешвольдському цвинтарі",
      color: "#00D166",
    },
  },
  {
    cron: "0 22 * * 2,6",
    msg: {
      title: "Примарний диліжанс",
      desc: "Примарний диліжанс стартував. на Ешвольдському цвинтарі",
      color: "#00D166",
    },
  },

  // Ancient Arena
  {
    cron: "25 21 * * 2,4,6,7",
    msg: {
      title: "Стародавня арена",
      desc: "Стародавня арена стартує через 5 хв. на загиблому острові",
      color: "#00D166",
    },
  },
  {
    cron: "30 21 * * 2,4,6,7",
    msg: {
      title: "Стародавня арена",
      desc: "Стародавня арена стартувала на загиблому острові",
      color: "#00D166",
    },
  },

  // Ancient Nightmare
  {
    cron: "55 11 * * 3,5",
    msg: {
      title: "Стародавній кошмар",
      desc: "Стародавній кошмар стартує через 5 хв. Пік Завейн",
      color: "#00D166",
    },
  },
  {
    cron: "0 12 * * 3,5",
    msg: {
      title: "Стародавній кошмар",
      desc: "Стародавній кошмар стартував. Пік Завейн",
      color: "#00D166",
    },
  },
  {
    cron: "25 20 * * 3,5",
    msg: {
      title: "Стародавній кошмар",
      desc: "Стародавній кошмар стартує через 5 хв. Пік Завейн",
      color: "#00D166",
    },
  },
  {
    cron: "30 20 * * 3,5",
    msg: {
      title: "Стародавній кошмар",
      desc: "Стародавній кошмар стартував. Пік Завейн",
      color: "#00D166",
    },
  },
  {
    cron: "55 21 * * 3,5",
    msg: {
      title: "Стародавній кошмар",
      desc: "Стародавній кошмар стартує через 5 хв. Пік Завейн",
      color: "#00D166",
    },
  },
  {
    cron: "0 22 * * 3,5",
    msg: {
      title: "Стародавній кошмар",
      desc: "Стародавній кошмар стартував. Пік Завейн",
      color: "#00D166",
    },
  }
];

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  let channel = client.channels.cache.get(`984761377463889930`);

  for (const event of eventJson) {
    console.log(`Scheduling for event ${event?.msg?.title}`);
    cron.schedule(
      event.cron,
      () => {
        if (channel) {
          const embed = new MessageEmbed()
            .setColor(event?.msg?.color || "#FF0000")
            .setTitle(event?.msg?.title || "Default Title")
            .setTimestamp()
            .setDescription(event?.msg?.desc || "Default Description");
          console.log(
            `Sending notification for event ${event.title} and cron ${event?.cron}`
          );
          channel.send({ content: "Нагадування", embeds: [embed] });
        }
      },
      {
        scheduled: true,
        timezone: "Europe/Paris",
      }
    );
  }
  console.log("Scheduled all events");

  setInterval(() => {
    const formatMemoryUsage = (data) =>
      `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;
    const memoryData = process.memoryUsage();
    const memoryUsage = {
      rss: `${formatMemoryUsage(
        memoryData.rss
      )} -> Resident Set Size - total memory allocated for the process execution`,
      heapTotal: `${formatMemoryUsage(
        memoryData.heapTotal
      )} -> total size of the allocated heap`,
      heapUsed: `${formatMemoryUsage(
        memoryData.heapUsed
      )} -> actual memory used during the execution`,
      external: `${formatMemoryUsage(
        memoryData.external
      )} -> V8 external memory`,
    };

    console.log(memoryUsage);
  }, 1000 * 600);
});

client.login(botToken);
