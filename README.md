# Snoring Pony: Officiel Website

> 🐴 **Welcome to this website of Snoring Pony!** This project is built with Astro. Feel free to explore and develop!

## 🚀 Project Structure

Here is the current structure of the website:

```text
/
├── public/                  # Website favicon and other public assets
│   ├── favicon.svg
│   └── software.png
├── src/
│   ├── assets/              # Static assets like images and icons
│   │   ├── logo.png
│   │   ├── github.svg
│   │   ├── home.svg
│   │   └── ...
│   ├── components/          # Reusable UI components
│   │   ├── Docs.astro
│   │   ├── Downloads.astro
│   │   ├── Features.astro
│   │   └── ...
│   ├── layouts/             # Layout components for pages
│   │   └── Layout.astro     # Main layout for the site
│   ├── pages/               # Application pages
│   │   ├── [lang]/          # Language-specific pages
│   │   │   └── index.astro  # Homepage per language
│   │   ├── api/             # API routes
│   │   │   └── check-update.ts
│   ├── styles/              # Global and component-specific styles
│   │   └── global.css
│   └── i18n/                # Internationalization utilities
│       ├── ui.ts            # UI strings for translations
│       └── utils.ts         # Translation helpers
├── astro.config.mjs         # Astro configuration file
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

For more details, feel free to explore the corresponding folders and files.

## 🧞 Useful Commands

All commands should be executed from the root of the project, in your terminal:

|                   Command | Action                                            |
| :------------------------ | :-----------------------------------------------  |
|             `npm install` | Installs project dependencies                     |
|             `npm run dev` | Starts the development server at `localhost:4321` |
|           `npm run build` | Builds your site for production into `./dist/`    |
|         `npm run preview` | Previews the built site before deployment         |
|       `npm run astro ...` | Executes CLI commands like `astro add`            |
| `npm run astro -- --help` | Displays help for the Astro CLI                   |

## 👀 Want to Learn More?

Check out the [official Astro documentation](https://docs.astro.build) or join their [Discord server](https://astro.build/chat).
