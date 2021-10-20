const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-unexpected-string-bool");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("no-unexpected-string-bool", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<popup wx:if="{{false}}" />`,
    },
    {
      filename: "test.wxml",
      code: `<popup show />`,
    },
    {
      filename: "test.wxml",
      code: `<toast show="{{true}}" />`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<popup wx:if="true" />`,
      errors: [{ messageId: "trueString" }],
    },
    {
      filename: "test.wxml",
      code: `<popup wx:if="false" />`,
      errors: [{ messageId: "falseString" }],
    },
    {
      filename: "test.wxml",
      code: `<dialog showAnime="false" />`,
      errors: [{ messageId: "falseString" }],
    },
  ],
});
