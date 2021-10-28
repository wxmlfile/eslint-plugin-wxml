module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "suggestion",
    docs: {
      description: "remove useless block WXElement",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/no-unnecessary-block.html",
    },
    fixable: null,
    messages: {
      unnecessaryWarn: "unnecessary block element, you can refactor it",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      'WXElement[name="block"]'(node) {
        if (node && node.children) {
          if (node.children.length === 0) {
            context.report({
              node,
              messageId: "unnecessaryWarn",
            });
            return;
          } else {
            const filterTextElementArray = node.children.filter(
              (node) => node.type !== "WXText" && node.type !== "WXElement"
            );
            const textArray = node.children.filter(
              (node) => node.type === "WXText"
            );
            const elementArray = node.children.filter(
              (node) => node.type === "WXElement"
            );
            if (filterTextElementArray.length > 0) {
              return;
            } else {
              let allTextEmpty = true;
              for (let i = 0; i < textArray.length; i++) {
                if (
                  textArray[i].value &&
                  textArray[i].value.replace(/( |\t|\n|\r\n)+/, "") === ""
                ) {
                  // do nothing
                } else {
                  allTextEmpty = false;
                }
              }
              if (elementArray.length <= 1 && allTextEmpty) {
                context.report({
                  node: node.startTag ? node.startTag : node,
                  messageId: "unnecessaryWarn",
                });
              }
            }
          }
        }
      },
    };
  },
};
