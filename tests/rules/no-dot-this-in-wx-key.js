const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-dot-this-in-wx-key");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("no-dot-this-in-wx-key", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="title" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="index" ></view>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="*this" ></view>`,
      errors: [`not allow using "*this" as wx:key's value`],
    },
  ],
});
