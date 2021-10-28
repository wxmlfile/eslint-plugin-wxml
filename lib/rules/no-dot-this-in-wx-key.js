module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow using *this as wx:key",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/no-dot-this-in-wx-key.html",
    },
    fixable: null,
    schema: [],
    messages: {
      hint: 'not allow using "*this" as wx:key value',
    },
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      'WXAttribute[key="wx:key"]'(node) {
        if (node && node.value === "*this") {
          context.report({
            node,
            messageId: "hint",
          });
        }
      },
    };
  },
};
