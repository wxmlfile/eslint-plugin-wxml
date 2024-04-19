module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "disallow use ture/false string as WXAttribute's value",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/no-unexpected-string-bool.html",
    },
    fixable: null,
    messages: {
      trueString:
        "don't use true string as value, omitted it or use {{true}} instead",
      falseString: "don't use false string as value, use {{false}} instead",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXAttribute(node) {
        if (node && node.value) {
          if (node.value === "true" || node.value === "false") {
            context.report({
              node,
              data: {
                true: "true",
                false: "false",
              },
              messageId: node.value === "true" ? "trueString" : "falseString",
            });
          }
        }
      },
    };
  },
};
