const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/wx-key");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("wx-key", rule, {
  valid: [
    {
      filename: "wxkey.wxml",
      code: `<view wx:for="{{GoodsList}}" wx:key="*this" />`,
    },
    {
      filename: "wxkey.wxml",
      code: `<view />`,
    },
  ],
  invalid: [
    {
      filename: "wxkey.wxml",
      code: `<view wx:for="{{GoodsList}}" />`,
      errors: [
        {
          messageId: "missingWarn",
        },
      ],
    },
  ],
});
