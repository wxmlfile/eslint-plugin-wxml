const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/report-wxml-syntax-error");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("report-wxml-syntax-error", rule, {
  valid: [
    {
      filename: "wxml.wxml",
      code: `<app> <main-page /> </app>`,
    },
  ],
  invalid: [
    {
      filename: "wxml.wxml",
      code: `<wxs module="utils" /> var data = {}; module.exports = { data: data } </wxs>`,
      errors: [
        {
          messageId: "wxmlError",
          data: {
            error:
              "Expecting token of type --> EOF <-- but found --> 'var data = {}; module.exports = { data: data } ' <--",
          },
        },
      ],
    },
    {
      filename: "wxml.wxml",
      code: `<missing-close / <share-modal /> <bottom-bar />`,
      errors: [
        {
          messageId: "wxmlError",
          data: {
            error: `Expecting: one of these possible Token sequences:\n  1. [CLOSE]\n  2. [SLASH_CLOSE]\nbut found: '/'`,
          },
        },
      ],
    },
  ],
});
