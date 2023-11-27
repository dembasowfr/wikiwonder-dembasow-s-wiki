// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

// docusaurus .env file
require('dotenv').config();

const config = {
  title: 'WIKI WONDER',
  tagline: 'Demba Sow\'s personal wiki',
  favicon: 'img/wiki-wonder3.png',
  //custom .env file
  customFields: {
    // Put your custom environment here
    REACT_APP_EMAILJS_PUBLIC_KEY : process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    REACT_APP_EMAILJS_PRIVATE_KEY : process.env.REACT_APP_EMAILJS_PRIVATE_KEY,
    REACT_APP_EMAILJS_TEMPLATE_ID : process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    REACT_APP_EMAILJS_SERVICE_ID : process.env.REACT_APP_EMAILJS_SERVICE_ID,
    
    REACT_APP_PROJECT_ID : process.env.REACT_APP_PROJECT_ID,
    REACT_APP_DATABASE_ID   : process.env.REACT_APP_DATABASE_ID,
    REACT_APP_COLLECTION_ID : process.env.REACT_APP_COLLECTION_ID,
    REACT_APP_ENDPOINT : process.env.REACT_APP_ENDPOINT,
    REACT_APP_RECAPTCHA_SITE_KEY : process.env.REACT_APP_RECAPTCHA_SITE_KEY,
    REACT_APP_RECAPTCHA_SECRET_KEY : process.env.REACT_APP_RECAPTCHA_SECRET_KEY,
    REACT_APP_HCAPTCHA_SITE_KEY : process.env.REACT_APP_HCAPTCHA_SITE_KEY,
  },

  // Set the production url of your site here
  url: 'https://wikiwonder.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dembasowfr', // Usually your GitHub org/user name.
  projectName: 'wikiwonder-dembasow-s-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      scripts: [
        {
          src: 'https://chimpstatic.com/mcjs-connected/js/users/e3db74ba215fe8fed02bd007f/2bdfa611466bfa502d730d867.js',
          async: true,
          id: 'mcjs',
        },
      ],
      // scripts: [
      //   {
      //     src: 'https://chimpstatic.com/mcjs-connected/js/users/e3db74ba215fe8fed02bd007f/2bdfa611466bfa502d730d867.js',
      //     async: true,
      //     id: 'mcjs',
      //   },
      // ],
      // headTags: [
      //   {
      //     tagName: 'script',
      //     attributes: {
      //       id: 'mcjs',
      //       src: 'https://chimpstatic.com/mcjs-connected/js/users/e3db74ba215fe8fed02bd007f/2bdfa611466bfa502d730d867.js',
      //       async: true,
      //     },
      //   },
      // ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DEMBA SOW',
        logo: { 
          alt: 'demba sow',
          src: 'img/wiki-wonder3.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Writing',
          },
         
         
          {to: '/blog', label: 'Blog', position: 'right'},
          // {
          //   href: 'https://github.com/dembasowfr/wikiwonder-dembasow-s-wiki',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'WIKI WONDER',
            items: [
              {
                label: 'Writing',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Writing',
                to: '/docs/intro',
              },
            ],
          },
         
          {
            title: 'Social',
            items: [
              {
                label: 'Portfolio',
                href: 'https://www.dembashow.tech/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/dembasowfr/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dembasowfr/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/dembasowofficial/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dembasowfr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
             
            ],
          },
        ],
        //I want to add horizontal line here
        
        copyright: `Copyright © ${new Date().getFullYear()} Wiki Wonder. Built by <a href="https://dembashow.tech/">Demba Sow</a> with React, Docusaurus & Love💘🫰`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
