module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "suggestion",
    docs: {
      description: "disabllow using dynamic wx:key",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/no-dynamic-wx-key.html",
    },
    fixable: null,
    messages: {
      dynamicWarn: "disallow using dynamic wx:key",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      'WXAttribute[key="wx:key"]'(node) {
        if (node.value && /{{[\s\S]*}}/.test(node.value)) {
          context.report({
            node,
            messageId: "dynamicWarn",
          });
        }
      },
    };
  },
};
