const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-const-and-let-in-wxs");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

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
