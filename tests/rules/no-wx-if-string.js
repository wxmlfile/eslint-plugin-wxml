const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-wx-if-string");

tester.run("no-wx-if-string", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view wx:if="{{show}}" />`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:if="{{goodsList.length > 0}}" />`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:if="{{goodsList.length >
         0}}" />`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:if="{{showView}}" />`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:elif="{{goodsList.length > 0}}" />`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:elif="{{name === 'iChenLei'}}" />`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:elif="{{data.a.b.c.list.length > 0}}" />`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<view wx:if="show - {{goodsList.length > 0}}" />`,
      errors: [{ messageId: "stringWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<view wx:if="show" />`,
      errors: [{ messageId: "stringWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<view wx:if="{{show}} " />`,
      errors: [{ messageId: "stringWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<view wx:elif=" {{show}}" />`,
      errors: [{ messageId: "stringWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<view wx:elif=" {{false}} " />`,
      errors: [{ messageId: "stringWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<view wx:if="dyanmic-{{show}} " />`,
      errors: [{ messageId: "stringWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<view wx:elif=" {{goodsList.length > 0}}" />`,
      errors: [{ messageId: "stringWarn" }],
    },
  ],
});
