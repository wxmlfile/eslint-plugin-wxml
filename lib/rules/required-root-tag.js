module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "current wxml file's root tag must be special tag",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/required-root-tag.html",
    },
    fixable: null,
    messages: {
      rootTag: "current wxml file's root tag must be {{tagName}}",
    },
    schema: {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 1,
      maxItems: 1,
    },
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    const rootTagName = (context.options || [])[0];
    return {
      Program(node) {
        if (!rootTagName) return;
        let tags;
        if (node && node.body && node.body.length >= 0) {
          tags = node.body.filter((tag) => tag.type === "WXElement");
        }
        if (!(tags && tags.length === 1 && tags[0].name === rootTagName)) {
          context.report({
            node,
            messageId: "rootTag",
            data: { tagName: `<${rootTagName}>` },
          });
        }
      },
    };
  },
};
