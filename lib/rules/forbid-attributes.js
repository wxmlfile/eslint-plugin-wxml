module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "forbid using some attributes in producation code",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/forbid-attributes.html",
    },
    fixable: null,
    messages: {
      forbiddenAttr: "wxml attribute {{attr}} is forbidden",
      forbiddenAttrWithMessage: "{{message}}",
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
                    attr: { type: "string" },
                    message: { type: "string" },
                  },
                  required: ["attr"],
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
        indexedForbidConfigs[item] = { attr: item };
      } else {
        indexedForbidConfigs[item.attr] = item;
      }
    });
    return {
      WXAttribute(node) {
        if (node && node.key && indexedForbidConfigs[node.key]) {
          const msg = indexedForbidConfigs[node.key].message;
          context.report({
            node: node,
            messageId: msg ? "forbiddenAttrWithMessage" : "forbiddenAttr",
            data: { attr: node.key, message: msg },
          });
        }
      },
    };
  },
};
