const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-const-and-let-in-wxs");



tester.run("no-const-and-let-in-wxs", rule, {
  valid: [
    {
      filename: "wxs.wxml",
      code: `<wxs module="test">
        var config = ["color", "width"];
        module.exports = { config: config };
      </wxs>`,
    },
  ],
  invalid: [
    {
      filename: "wxs.wxml",
      code: `<wxs module="test">
        const config = ["color", "width"];
        module.exports = { config: config };
      </wxs>`,
      errors: [
        {
          messageId: "variableDeclaration",
          data: {
            kind: "const",
          },
        },
      ],
    },
    {
      filename: "wxs.wxml",
      code: `<wxs module="test">
        let config = ["color", "width"];
        module.exports = { config: config };
      </wxs>`,
      errors: [
        {
          messageId: "variableDeclaration",
          data: {
            kind: "let",
          },
        },
      ],
    },
  ],
});
