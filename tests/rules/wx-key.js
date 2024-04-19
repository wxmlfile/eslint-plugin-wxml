const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/wx-key");

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
