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
      '/rules/': [
        ['/rules/', 'Summary'],

        {
          title: 'Rules List',
          collapsable: false,
          children: rulesTree
        }
      ],

      '/': ['/', '/user-guide/', '/rules/']
    },

  //  algolia: {
  //    apiKey: 'b2b69365da747a9a9635cda391317c36',
  //    indexName: 'eslint-plugin-vue'
  //  }
  }
}
 