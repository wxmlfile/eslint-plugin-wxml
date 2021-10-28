module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "empty wxml tag must be self closing, for miniprogram size reduce",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/empty-tag-self-closing.html",
    },
    fixable: null,
    schema: [],
    messages: {
      selfCloseHint: "empty wxml tag must be self closing",
    },
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      "WXElement[startTag.selfClosing=false]"(node) {
        if (node && node.children) {
          if (node.children.length === 0) {
            context.report({
              node,
              messageId: "selfCloseHint",
            });
            return;
          } else if (node.children.length === 1) {
            const singleNode = node.children[0];
            if (
              singleNode.type === "WXText" &&
              singleNode.value &&
              singleNode.value.replace(/( |\t|\n|\r\n)+/, "") === ""
            ) {
              context.report({
                node,
                messageId: "selfCloseHint",
              });
            }
          }
        }
      },
    };
  },
};
