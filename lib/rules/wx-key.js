module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "missing wx:key when loop wxml node",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/wx-key.html",
    },
    fixable: null,
    messages: {
      missingWarn: 'missing "wx:key" prop for wxml element loop',
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      'WXAttribute[key="wx:for"]'(node) {
        if (node && node.parent && node.parent.type === "WXStartTag") {
          let flag = true;
          node.parent.attributes.map((attr) => {
            if (attr && attr.key === "wx:key") {
              flag = false;
            }
          });
          if (flag) {
            context.report({
              node: node.parent,
              messageId: "missingWarn",
            });
          }
        }
      },
    };
  },
};
