const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/wxs-must-be-top-level");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("wxs-must-be-top-level", rule, {
  valid: [
    {
      filename: "wxs.wxml",
      code: `
        <wxs src="../../util.wxs" module="mode"></wxs>
        <wxs  module="mode"> module.exports = { x: 23 } </wxs>
      `,
    },
  ],
  invalid: [
    {
      filename: "wxs.wxml",
      code: `<view><wxs src="../../show.wxs" /></view>`,
      errors: [{ messageId: "wxsTopLevel" }],
    },
  ],
});
