const eslint = require("eslint");
const semver = require("semver");

const ruleTester = semver.gte(eslint.Linter.version, "9.0.0-0")
  ? new eslint.RuleTester({
      languageOptions: {
        parser: require("@wxml/parser"),
      },
    })
  : new eslint.RuleTester({ parser: require.resolve("@wxml/parser") });

module.exports.RuleTester = ruleTester;
