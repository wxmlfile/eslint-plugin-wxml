const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-inconsistent-tagname");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("no-inconsistent-tagname", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="title" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<app />`,
    },
    {
      filename: "test.wxml",
      code: `<app></app>`,
    },
    {
      filename: "wxs.wxml",
      code: `<wxs module="mo" src="../../show.wxs" />`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="index" ></viw>`,
      errors: [`startTag's name <view /> and endTag's name </viw> not equal`],
    },
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="index" ></>`,
      errors: [`startTag's name <view /> and endTag's name </> not equal`],
    },
    {
      filename: "test.wxml",
      code: `<view wx:for="{{titles}}" wx:key="index" ></ >`,
      errors: [`startTag's name <view /> and endTag's name </> not equal`],
    },
  ],
});
