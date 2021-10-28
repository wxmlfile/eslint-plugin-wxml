module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "wxs module name check",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/wxs-module-prop.html",
    },
    fixable: null,
    messages: {
      missingWarn: 'missing "module" prop for wxs',
      invalidWarn: "invalid wxs module name",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXScript(node) {
        let missingModule = true;
        if (node && node.startTag) {
          if (node.startTag.attributes && node.startTag.attributes.length > 0) {
            node.startTag.attributes.forEach((attr) => {
              if (attr && attr.key === "module") {
                missingModule = false;
                // also check module name is valid or not
                if (attr && attr.value) {
                  if (!/^[_a-zA-Z][a-zA-Z0-9_]*$/.test(attr.value)) {
                    context.report({
                      node: attr,
                      messageId: "invalidWarn",
                    });
                  }
                }
              }
            });
          }
        }
        if (missingModule) {
          context.report({
            node: node.startTag ? node.startTag : node,
            messageId: "missingWarn",
          });
        }
      },
    };
  },
};
