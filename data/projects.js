export default [
  {
    img_path: '../static/images/projects/nusbuses.jpg',
    title: 'NUS Buses',
    description: 'A realtime NUS Buses arrival app. Redesigned and redeveloped.',
    tech: ['Android', 'React Native', 'Glitch', 'Firebase'],
    urls: [
      {
        url_type: 'android',
        url_title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=bazingaa.nusbuses',
      },
      {
        url_type: 'ios',
        url_title: 'iOS',
        url: 'https://itunes.apple.com/us/app/nus-buses/id1333504091',
      },
    ],
    backgroundColorClass: 'nusbuses',
  },
  {
    img_path: '../static/images/projects/sgcheckpoint.png',
    title: 'SG Checkpoint',
    description: "An android app to check the traffic flow @ singapore's checkpoint",
    tech: ['Android', 'Laravel'],
    urls: [
      {
        url_type: 'android',
        url_title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=chihao.singaporetrafficimages',
      },
      {
        url_type: 'website',
        url_title: 'Website',
        url: 'http://www.sgcheckpoint.com',
      },
    ],
    backgroundColorClass: 'sgcheckpoint',
  },
  {
    img_path: '../static/images/projects/foodbites.jpg',
    title: 'FoodBites',
    description:
      'FoodBites aim to reduce food wastage by connecting food stall owners like bakeries, restaurants or even old chang kee to consumers through an mobile application',
    tech: ['Expo.io', 'React', 'Firebase'],
    urls: [
      {
        url_type: 'github',
        url_title: 'Github',
        url: 'https://github.com/kohchihao/Foodies-FoodBites',
      },
      {
        url_type: 'website',
        url_title: 'App',
        url: 'https://expo.io/@kohchihao/FoodBites',
      },
    ],
    backgroundColorClass: 'foodbites',
  },
  {
    img_path: '../static/images/projects/sgbusbot.png',
    title: 'SG BusBot',
    description: 'A bot to retrieve bus arrival timings either based on the bus code or your current location',
    tech: ['Telegram', 'NodeJS', 'Google Cloud'],
    urls: [
      {
        url_type: 'telegram',
        url_title: 'Telegram',
        url: 'https://t.me/SingaporeBus_bot',
      },
    ],
    backgroundColorClass: 'sgbusbot',
  },
  {
    img_path: '../static/images/projects/sgmrt.png',
    title: 'SG MRT',
    description: 'A telegram bot to retrieve MRT arrival timings based on mrt stations',
    tech: ['Telegram', 'NodeJS', 'Heroku'],
    urls: [
      {
        url_type: 'telegram',
        url_title: 'Telegram',
        url: 'https://t.me/sgmrt_bot',
      },
    ],
    backgroundColorClass: 'sgmrt',
  },
  {
    img_path: '../static/images/projects/push2me.jpg',
    title: 'Push2Me',
    description: 'A telegram bot that can send you messages/images when you ping the url given to you',
    tech: ['Telegram', 'NodeJS', 'Heroku'],
    urls: [
      {
        url_type: 'telegram',
        url_title: 'Telegram',
        url: 'https://t.me/push2me_bot',
      },
    ],
    backgroundColorClass: 'push2me',
  },
  {
    img_path: '../static/images/projects/scoot.png',
    title: 'Scoot Notifier',
    description:
      'The purpose of this script is to scrap flyscoot.com to get the cheapest deals from SG to Bangkok. It uses osmosis as the base scraper and chalk to beautify the text. It also sends you a telegram notification when the cheapest deals are met',
    tech: ['Telegram', 'NodeJS', 'Heroku'],
    urls: [
      {
        url_type: 'github',
        url_title: 'Github',
        url: 'github.com/kohchihao/FlyScoot-scraper',
      },
    ],
    backgroundColorClass: 'scoot',
  },
  {
    img_path: '../static/images/projects/apollo.png',
    title: 'ApolloBot',
    description: 'This bot will post Space Mission Apollo17 images on a daily basis',
    tech: ['Python', 'Heroku'],
    urls: [
      {
        url_type: 'twitter',
        url_title: 'Twitter',
        url: 'https://twitter.com/_ApolloBot',
      },
      {
        url_type: 'github',
        url_title: 'Github',
        url: 'https://github.com/kohchihao/Apollo-Twitter-Bot',
      },
    ],
    backgroundColorClass: 'apollo',
  },
];
