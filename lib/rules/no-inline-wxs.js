module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "disabllow using inline wxs in wxml",
      categories: [],
      url: "https://eslint-plugin-wxml.vercel.app/rules/no-inline-wxs.html",
    },
    fixable: null,
    messages: {
      separateWxs: "disable inline wxs, please use separate .wxs file",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXScript(node) {
        if (node.value) {
          context.report({
            node,
            messageId: "separateWxs",
          });
        }
      },
    };
  },
};
