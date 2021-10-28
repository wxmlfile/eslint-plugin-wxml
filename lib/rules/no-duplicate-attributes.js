module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow duplication of wxml tag attributes",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/no-duplicate-attributes.html",
    },
    fixable: null,
    schema: [],
    messages: {
      checkDuplicatedAttrs:
        "not allow duplicated attributes, please check these duplicated attributes -> [{{attrs}}]",
    },
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXStartTag(node) {
        /**
         * check startTag attributes
         */
        if (node.attributes && node.attributes.length > 0) {
          const attrKeyArr = node.attributes.map(
            (attrNode) => '"' + attrNode.key + '"'
          );
          const duplicatedAttrStrs = attrKeyArr.filter(
            (item, index) => attrKeyArr.indexOf(item) !== index
          );
          if (duplicatedAttrStrs && duplicatedAttrStrs.length > 0) {
            const attrs = [...new Set(duplicatedAttrStrs)].join(",");
            context.report({
              node,
              messageId: "checkDuplicatedAttrs",
              data: { attrs },
            });
          }
        }
      },
    };
  },
};
