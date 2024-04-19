module.exports = {
  extends: ['eslint:recommended', 'plugin:node/recommended', 'plugin:eslint-plugin/recommended'],
  env: {
   es6: true
  },
  rules: {
    "node/no-extraneous-require": "off"
  }
}
