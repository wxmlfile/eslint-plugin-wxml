module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "current wxml file must require these tags",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/required-tags.html",
    },
    fixable: null,
    messages: {
      missingTags: "current wxml file missing these tags -> [{{tags}}]",
    },
    schema: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    const config = [...(context.options || [])];
    return {
      "Program:exit"(node) {
        if (config.length > 0) {
          context.report({
            node,
            messageId: "missingTags",
            data: { tags: config.map((tag) => `<${tag} />`).join(",") },
          });
        }
      },
      WXElement(node) {
        if (node && node.name && config.indexOf(node.name) !== -1) {
          config.splice(config.indexOf[node.name], 1);
        }
      },
    };
  },
};
