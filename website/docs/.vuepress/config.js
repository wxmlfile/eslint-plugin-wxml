'use strict'

const rules = require('../../../tools/lib/rules')
const path = require('path')

const rulesTree = [];
rules.map(rule => {
  rulesTree.push([
    `/rules/${rule.name}`,
    rule.ruleId
  ])
})

module.exports = {
  head: [
    [
      'script',
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-8VGFV3FXW5"
      },
      ''
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8VGFV3FXW5');
      `
    ]
  ],
  configureWebpack(_config, _isServer) {
    return {
      resolve: {
        alias: {
          module: require.resolve('./shim/module'),
          eslint$: require.resolve('./shim/eslint'),
          esquery: path.resolve(
            __dirname,
            '../../../node_modules/esquery/dist/esquery.min.js'
          ),
          '@eslint/eslintrc/universal': path.resolve(
            __dirname,
            '../../../node_modules/@eslint/eslintrc/dist/eslintrc-universal.cjs'
          )
        }
      }
    }
  },

  base: '/',
  title: 'eslint-plugin-wxml',
  description: 'Official ESLint plugin for wxml',
  evergreen: true,

  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    }
  },

  dest: 'public',
  themeConfig: {
    repo: 'wxmlfile/eslint-plugin-wxml',
    docsRepo: 'wxmlfile/eslint-plugin-wxml',
    docsDir: 'website/docs',
    docsBranch: 'main',
    editLinks: true,
    lastUpdated: true,
    logo: '/images/logo.png',

    nav: [
      { text: 'User Guide', link: '/user-guide/' },
      { text: 'Rules', link: '/rules/' },
    ],

    sidebar: {
      '/': [
        '/',
        '/user-guide/',
        [
          '/rules/',
          'Rules Summary'
        ],
        [
          '/rules/no-restricted-syntax',
          'Advanced Usage'
        ],
        {
          title: 'Rules List',
          collapsable: false,
          children: rulesTree
        }
      ]
    },

  //  algolia: {
  //    apiKey: '',
  //    indexName: ''
  //  }
  }
}
 