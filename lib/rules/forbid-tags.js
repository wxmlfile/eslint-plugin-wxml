module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "forbid using some tags in producation code",
      categories: [],
      url: "https://eslint-plugin-wxml.vercel.app/rules/forbid-tags.html",
    },
    fixable: null,
    messages: {
      forbiddenTag: "<{{tag}}> is forbidden",
      forbiddenTagWithMessage: "<{{tag}}> is forbidden, {{message}}",
    },
    schema: [
      {
        type: "object",
        properties: {
          forbid: {
            type: "array",
            items: {
              anyOf: [
                { type: "string" },
                {
                  type: "object",
                  properties: {
                    tag: { type: "string" },
                    message: { type: "string" },
                  },
                  required: ["tag"],
                  additionalProperties: false,
                },
              ],
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    const config = context.options[0] || [];
    const forbidConfig = config.forbid || [];
    const indexedForbidConfigs = {};
    forbidConfig.forEach((item) => {
      if (typeof item === "string") {
        indexedForbidConfigs[item] = { tag: item };
      } else {
        indexedForbidConfigs[item.tag] = item;
      }
    });
    return {
      WXElement(node) {
        if (node && node.name && indexedForbidConfigs[node.name]) {
          const msg = indexedForbidConfigs[node.name].message;
          context.report({
            node: node.startTag ? node.startTag : node,
            messageId: msg ? "forbiddenTagWithMessage" : "forbiddenTag",
            data: { tag: node.name, message: msg },
          });
        }
      },
    };
  },
};
