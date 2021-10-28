const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-dynamic-wx-key");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("no-dynamic-wx-key", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view wx:key="*this" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:key="id" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:key="index" ></view>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<view wx:for="{{list}}" wx:key="{{index}}" ></view>`,
      errors: [
        {
          messageId: "dynamicWarn",
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<view wx:for="{{list}}" wx:key="item-{{goodsId}}" ></view>`,
      errors: [
        {
          messageId: "dynamicWarn",
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<view wx:for="{{list}}" wx:key="item-{{goodsId}}-{{name}}" ></view>`,
      errors: [
        {
          messageId: "dynamicWarn",
        },
      ],
    },
  ],
});
