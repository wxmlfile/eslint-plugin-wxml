module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description:
        "forbid using wx:for with wx:if|wx:elif|wx:else at same tag,it cause compile error",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/no-wx-for-with-wx-if.html",
    },
    fixable: null,
    messages: {
      compileWarn:
        "forbid using wx:for with wx:if|wx:elif|wx:else at same tag, you can use <block /> to wrap loop list",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      'WXAttribute[key="wx:for"]'(node) {
        if (node && node.parent && node.parent.type === "WXStartTag") {
          const flag = node.parent.attributes.some((attr) => {
            return (
              attr &&
              (attr.key === "wx:if" ||
                attr.key === "wx:elif" ||
                attr.key === "wx:else")
            );
          });
          if (flag) {
            context.report({
              node: node.parent,
              messageId: "compileWarn",
            });
          }
        }
      },
    };
  },
};
