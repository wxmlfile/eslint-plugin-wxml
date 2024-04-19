const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-index-in-wx-key");

tester.run("no-index-in-wx-key", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="title" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="*this" ></view>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="index" ></view>`,
      errors: [`not allow using "index" as wx:key value`],
    },
  ],
});
