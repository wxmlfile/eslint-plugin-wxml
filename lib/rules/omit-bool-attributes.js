module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "suggestion",
    docs: {
      description: "omit true attributes, same with jsx (<A show />)",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/omit-bool-attributes.html",
    },
    fixable: null,
    messages: {
      omitWarn:
        "please omit {{{{true}}}}, it means convert <comp {{attrKey}}={{{{true}}}} /> to <comp {{attrKey}} />",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXAttribute(node) {
        if (node && node.value) {
          if (node.value.split(" ").join("") === "{{true}}") {
            context.report({
              node,
              messageId: "omitWarn",
              data: {
                attrKey: node.key,
                true: "true",
                false: "false",
              },
            });
          }
        }
      },
    };
  },
};
