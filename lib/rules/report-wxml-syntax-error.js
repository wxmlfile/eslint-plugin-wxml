module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "report wxml syntax error",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/report-wxml-syntax-error.html",
    },
    fixable: null,
    messages: {
      wxmlError: "{{error}}",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXLexerError(node) {
        if (node && node.value) {
          context.report({
            node,
            messageId: "wxmlError",
            data: {
              error: node.value,
            },
          });
        }
      },
      WXParseError(node) {
        if (node && node.value) {
          context.report({
            node,
            messageId: "wxmlError",
            data: {
              error: node.value,
            },
          });
        }
      },
    };
  },
};
