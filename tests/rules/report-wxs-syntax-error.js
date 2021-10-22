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
    {
      filename: "wxs.wxml",
      code: `<wxs module="utils"></wxs>`,
    },
    {
      filename: "wxs.wxml",
      code: `<wxs module="utils">  </ wxs >`,
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
    {
      filename: "wxs.wxml",
      code: `<wxs module="utils"> vat s = require("../../util.wxs"); module.exports = { func: s.min } </wxs>`,
      errors: [
        {
          messageId: "wxsError",
          data: {
            error: "Unexpected token s",
          },
        },
      ],
    },
  ],
});
