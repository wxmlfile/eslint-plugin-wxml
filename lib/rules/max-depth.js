// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

function countNodeDepth(node) {
  let depth = 1;
  while (node && node.parent && node.parent.type === "WXElement") {
    depth += 1;
    node = node.parent;
  }
  return depth;
}

module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "suggestion",
    docs: {
      description: "set max wxml tree depth to hint extract component",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/max-depth.html",
    },
    fixable: null,
    messages: {
      depthWarn:
        "current node's depth({{depth}}) > {{settingDepth}}, please extract component to reduce wxml tree depth",
    },
    schema: [
      {
        type: "number",
        additionalProperties: false,
        maxItems: 1,
      },
    ],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    const settingDepth = context.options[0];
    return {
      WXElement(node) {
        if (!settingDepth) {
          return;
        }
        if (Number.isInteger(settingDepth) && parseInt(settingDepth, 10) > 0) {
          const DEPTH = parseInt(settingDepth, 10);
          const curNodeDepth = countNodeDepth(node);
          if (curNodeDepth > DEPTH) {
            context.report({
              node: node.startTag ? node.startTag : node,
              messageId: "depthWarn",
              data: {
                depth: curNodeDepth,
                settingDepth: DEPTH,
              },
            });
          }
        } else {
          return;
        }
      },
    };
  },
};
