// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require('prism-react-renderer');

// Overridable so forks can publish a preview under a project path.
const baseUrl = process.env.DOCS_BASE_URL ?? '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iDempiere Open Source ERP',
  tagline: 'Community Powered Documentation',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: process.env.DOCS_URL ?? 'https://idempiere.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'idempiere', // Usually your GitHub org/user name.
  projectName: 'idempiere.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Old URLs from before the docs were reorganised by audience.
        redirects: require('./redirects.json'),
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: `${baseUrl}img/logo.png`,
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: `${baseUrl}manifest.json`,
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0c5f91',
          },
        ],
      },
    ],
    './plugins/version-compare',
],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/idempiere/idempiere.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/idempiere-social-card.jpg',
      navbar: {
        title: 'iDempiere',
        logo: {
          alt: 'iDempiere Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'installSidebar',
            position: 'left',
            label: 'Install & upgrade',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developSidebar',
            position: 'left',
            label: 'Develop',
          },
          {
            type: 'docSidebar',
            sidebarId: 'integrateSidebar',
            position: 'left',
            label: 'Integrate',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pluginsSidebar',
            position: 'left',
            label: 'Plugins',
          },
          {
            type: 'dropdown',
            label: 'Releases',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'releaseNotesSidebar',
                label: 'Release notes',
              },
              {
                to: '/upgrade/compare',
                label: 'Compare versions',
              },
            ],
          },
          // Right
          {
            href: 'https://github.com/idempiere/idempiere',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/guide',
              },
              {
                label: 'Install & upgrade',
                to: '/docs/install',
              },
              {
                label: 'Develop',
                to: '/docs/develop',
              },
              {
                label: 'Integrate',
                to: '/docs/integrate',
              },
              {
                label: 'Plugins',
                to: '/docs/plugins',
              },
              {
                label: 'Release notes',
                to: '/docs/release-notes',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Google Groups',
                href: 'https://groups.google.com/g/idempiere',
              },
              {
                label: 'Mattermost',
                href: 'https://mattermost.idempiere.org/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/idempiere/',
              },
              {
                label: 'Twitter',
                href: 'http://www.twitter.com/idempiere',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCRdFTCB3yc_ni8EBXyhVqfQ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/groups/5146317/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/idempiere/idempiere',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iDempiere<br/>Illustrations by <a href="https://storyset.com">Storyset</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
