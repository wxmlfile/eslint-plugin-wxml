module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "forbid using some tags in producation code",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/forbid-tags.html",
    },
    fixable: null,
    messages: {
      forbiddenTag: "<{{tag}}> is forbidden",
      forbiddenTagWithMessage: "{{message}}",
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
                {
                  type: "object",
                  properties: {
                    tag: { type: "string" },
                    message: { type: "string" },
                    disableAttrs: { type: "array" },
                  },
                  required: ["tag", "disableAttrs"],
                  additionalProperties: false,
                },
                {
                  type: "object",
                  properties: {
                    tag: { type: "string" },
                    message: { type: "string" },
                    skipAttrs: { type: "array" },
                  },
                  required: ["tag", "skipAttrs"],
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
      WXStartTag(node) {
        if (node && node.name && indexedForbidConfigs[node.name]) {
          const msg = indexedForbidConfigs[node.name].message;
          const disableAttrs =
            indexedForbidConfigs[node.name].disableAttrs || [];
          const skipAttrs = indexedForbidConfigs[node.name].skipAttrs || [];
          const attrs = new Set(
            (node.attributes || []).map((attr) => attr.key)
          );

          if (disableAttrs.length) {
            if (disableAttrs.some((attr) => attrs.has(attr))) {
              context.report({
                node: node,
                messageId: "forbiddenTagWithMessage",
                data: {
                  tag: node.name,
                  message: msg
                    ? msg
                    : `If you need to use the following attributes [${disableAttrs.join(
                        ", "
                      )}], you can't use <${node.name} />`,
                },
              });
            }
            return;
          }

          if (skipAttrs.length && skipAttrs.some((attr) => attrs.has(attr))) {
            return;
          }

          context.report({
            node: node,
            messageId: msg ? "forbiddenTagWithMessage" : "forbiddenTag",
            data: { tag: node.name, message: msg },
          });
        }
      },
    };
  },
};
