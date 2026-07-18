let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Astana',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "javascript:window.top.location.href='https://gemini.google.com/app';",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/bg-3.gif",
      categories: [
        {
          name: "Social Media",
          links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "tiktok",
            url: "https://www.tiktok.com/",
            icon: "brand-tiktok-filled",
            icon_color: "#8C32AD",
          },
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "vk",
            url: "https://vk.com/feed",
            icon: "brand-vk",
            icon_color: "#0642CC",
          },
        ],
      },
      {
        name: "Anime",
        links: [
          {
            name: "animelib",
            url: "https://animelib.org/",
            icon: "device-tv",
            icon_color: "#3F2C99",
          },
          {
            name: "mangalib",
            url: "https://mangalib.org/",
            icon: "notebook",
            icon_color: "#A64500",
          },
        ],
      },
      {
        name: "Creativity",
        links: [
          {
            name: "pinterest",
            url: "https://www.pinterest.es/",
            icon: "brand-pinterest",
            icon_color: "#ea6962",
          },
        ],
      },
    ],
    },
    {
      name: "job",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [

        {
          name: "Main",
          links: [
            {
              name: "usedesk",
              url: "https://secure.usedesk.com/chat",
              icon: "lifebuoy",
              icon_color: "#E05D46",
            },
            {
              name: "bitrix",
              url: "https://x2pos.bitrix24.kz/company/personal/user/398/tasks/",
              icon: "briefcase",
              icon_color: "#066FBD",
            },
            {
              name: "X2Pos",
              url: "https://x2pos.com/",
              icon: "hexagon-letter-x",
              icon_color: "#0456C9",
            },
            {
              name: "cal",
              url: "https://calendar.google.com/calendar/u/0/r/week",
              icon: "calendar",
              icon_color: "#210794",
            },
            {
              name: "sheet",
              url: "https://docs.google.com/spreadsheets/d/1toQ8nRoEjboFLS-7N21ctGJSiNyQYszbw08cSJTqzNU/edit?gid=1687860811#gid=1687860811",
              icon: "table",
              icon_color: "#038504",
            },
          ],
        },
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/GalymTlektesov",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Utilities",
          links: [
            {
              name: "translate",
              url: "https://translate.google.com/?hl=ru&sl=en&tl=ru&op=translate",
              icon: "language-hiragana",
              icon_color: "#0056B3",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/bg-2.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "mail",
              url: "https://mail.ru/",
              icon: "mail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
            {
              name: "icons",
              url: "https://tabler.io/icons",
              icon: "sparkles",
              icon_color: "#2B3C63",
            },
            {
              name: "nixpackage",
              url: "https://search.nixos.org/packages",
              icon: "snowflake",
              icon_color: "#41E0D9",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
