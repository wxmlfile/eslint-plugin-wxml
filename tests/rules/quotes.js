const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/quotes");

tester.run("quotes", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<popup wx:if='{{false}}' />`,
    },
    {
      filename: "test.wxml",
      code: `<popup a="" />`,
    },
    {
      filename: "test.wxml",
      code: `<popup wx:if='{{false}}' />`,
      options: ["single"],
    },
    {
      filename: "test.wxml",
      code: `<wxs src="../../utils.wxs"  />`,
      options: ["double"],
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<popup v-if="{{condition}}" />`,
      options: ["single"],
      errors: [
        { messageId: "wrongQuotes", data: { description: "singlequote" } },
      ],
    },
    {
      filename: "test.wxml",
      code: `<popup v-if='{{condition}}' />`,
      options: ["double"],
      errors: [
        { messageId: "wrongQuotes", data: { description: "doublequote" } },
      ],
    },
  ],
});
