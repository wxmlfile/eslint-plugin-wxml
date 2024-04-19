const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-unexpected-string-bool");

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
      errors: [
        {
          messageId: "trueString",
          data: {
            true: "{{true}}",
            false: "{{false}}",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<popup wx:if="false" />`,
      errors: [
        {
          messageId: "falseString",
          data: {
            true: "{{true}}",
            false: "{{false}}",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<dialog showAnime="false" />`,
      errors: [
        {
          messageId: "falseString",
          data: {
            true: "{{true}}",
            false: "{{false}}",
          },
        },
      ],
    },
  ],
});
