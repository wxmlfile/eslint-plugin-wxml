const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/wxs-module-prop");

tester.run("wxs-module-prop", rule, {
  valid: [
    {
      filename: "wxs.wxml",
      code: `<wxs module="show" />`,
    },
    {
      filename: "wxs.wxml",
      code: `<wxs module="_show" />`,
    },
    {
      filename: "wxs.wxml",
      code: `<wxs module="Show" />`,
    },
  ],
  invalid: [
    {
      filename: "wxs.wxml",
      code: `<wxs />`,
      errors: [{ messageId: "missingWarn" }],
    },
    {
      filename: "wxs.wxml",
      code: `<wxs module="0sss" />`,
      errors: [{ messageId: "invalidWarn" }],
    },
    {
      filename: "wxs.wxml",
      code: `<wxs module="-AAsss" />`,
      errors: [{ messageId: "invalidWarn" }],
    },
    {
      filename: "wxs.wxml",
      code: `<wxs module="AAsss-&8" />`,
      errors: [{ messageId: "invalidWarn" }],
    },
    {
      filename: "wxs.wxml",
      code: `<wxs > module.exports = { data: {} } </wxs>`,
      errors: [{ messageId: "missingWarn" }],
    },
  ],
});
