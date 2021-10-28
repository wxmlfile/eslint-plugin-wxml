module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "suggestion",
    docs: {
      description: "wxs must be top level in wxml tree",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/wxs-must-be-top-level.html",
    },
    fixable: null,
    messages: {
      wxsTopLevel: "wxs must be top level",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXScript(node) {
        if (!(node && node.parent && node.parent.type === "Program")) {
          context.report({
            node,
            messageId: "wxsTopLevel",
          });
        }
      },
    };
  },
};
