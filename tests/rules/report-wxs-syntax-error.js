const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/report-wxs-syntax-error");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("report-wxs-syntax-error", rule, {
  valid: [
    {
      filename: "wxs.wxml",
      code: `<wxs module="utils"> var data = {}; module.exports = { data: data } </wxs>`,
    },
  ],
  invalid: [
    {
      filename: "wxs.wxml",
      code: `<wxs module="utils"> var data = }; module.exports = { data: data } </wxs>`,
      errors: [
        {
          messageId: "wxsError",
          data: {
            error: "Unexpected token }",
          },
        },
      ],
    },
  ],
});
