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
        // if source only contain a single block WXElement
        // it allowed, most case for file placeholder (non-ui component)
        if (
          node &&
          node.parent &&
          node.parent.type === "Program" &&
          node.parent.body.filter((e) => e && e.type === "WXElement").length === 1 &&
          node.children &&
          node.children.length === 0
        ) {
          node;
          return;
        }

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
                if (
                  elementArray[0] &&
                  elementArray[0].startTag &&
                  elementArray[0].startTag.attributes &&
                  elementArray[0].startTag.attributes.some(
                    (attr) => attr && attr.key === "wx:for"
                  ) &&
                  node &&
                  node.startTag &&
                  node.startTag.attributes &&
                  node.startTag.attributes.some(
                    (attr) =>
                      attr &&
                      (attr.key === "wx:if" ||
                        attr.key === "wx:elif" ||
                        attr.key === "wx:else")
                  )
                ) {
                  // skip single element which contain "wx:for" attr
                  // Relative issue -> https://developers.weixin.qq.com/community/develop/doc/00082a556fcb0810a6b7e2eee5b800
                } else {
                  context.report({
                    node: node.startTag ? node.startTag : node,
                    messageId: "unnecessaryWarn",
                  });
                }
              }
            }
          }
        }
      },
    };
  },
};
