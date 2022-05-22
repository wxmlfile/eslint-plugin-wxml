module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "wxml tag's startTag name and endTag name must be equal",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/no-inconsistent-tagname.html",
    },
    fixable: null,
    messages: {
      tagInconsistent:
        "startTag's name '{{startTagName}}' and endTag's name '{{endTagName}}' not equal",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXElement(node) {
        if (
          node.startTag &&
          node.endTag &&
          node.startTag.name !== node.endTag.name
        ) {
          context.report({
            node,
            messageId: "tagInconsistent",
            data: {
              startTagName: node.startTag.name,
              endTagName: node.endTag.name,
            },
          });
        }
      },
    };
  },
};
