const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-index-in-wx-key");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

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
