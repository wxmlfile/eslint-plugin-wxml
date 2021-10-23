const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-inline-wxs");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("no-inline-wxs", rule, {
  valid: [
    {
      filename: "wxs.wxml",
      code: `<wxs module="mo" src="../../show.wxs" />`,
    },
  ],
  invalid: [
    {
      filename: "wxs.wxml",
      code: `
        <wxs module="mo">
          var s = 12;
          module.export = {
            data: s
          }
        </wxs>
      `,
      errors: [{ messageId: "separateWxs" }],
    },
  ],
});
