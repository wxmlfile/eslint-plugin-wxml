module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description:
        "wxs only support var VariableDeclaration, let and const not support",
      categories: [],
      url: "https://eslint-plugin-wxml.vercel.app/rules/no-const-and-let-in-wxs.js.html",
    },
    fixable: null,
    messages: {
      variableDeclaration:
        'wxs not support "{{kind}}" VariableDeclaration, please use "var"',
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      VariableDeclaration(node) {
        if (node && node.kind) {
          if (node.kind === "let" || node.kind === "const") {
            context.report({
              node,
              messageId: "variableDeclaration",
              data: { kind: node.kind },
            });
          }
        }
      },
    };
  },
};
