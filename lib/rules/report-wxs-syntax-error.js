module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "report inline wxs script syntax error",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/report-wxs-syntax-error.html",
    },
    fixable: null,
    messages: {
      wxsError: "{{error}}",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXScriptError(node) {
        if (node && node.value) {
          context.report({
            node,
            messageId: "wxsError",
            data: {
              error: node.value,
            },
          });
        }
      },
    };
  },
};
