module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "tag must required attributes config",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/required-attributes.html",
    },
    fixable: null,
    messages: {
      missingAttributes: "<{{tag}}> missing these attributes -> [{{attrs}}]",
    },
    schema: {
      type: "array",
      items: {
        anyOf: [
          {
            type: "object",
            properties: {
              tag: { type: "string" },
              attrs: {
                type: "array",
                items: {
                  anyOf: [
                    { type: "string" },
                    {
                      type: "object",
                      properties: {
                        key: { type: "string" },
                        value: { type: "string" },
                      },
                      required: ["key"],
                      additionalProperties: false,
                    },
                  ],
                },
              },
            },
            required: ["tag", "attrs"],
            additionalProperties: false,
          },
        ],
      },
    },
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    const config = context.options || [];
    const indexedConfigs = {};
    config.forEach((item) => {
      if (typeof item === "object") {
        indexedConfigs[item.tag] = item.attrs || [];
      }
    });
    return {
      WXElement(node) {
        if (node && node.name && indexedConfigs[node.name]) {
          const attrsConfig = indexedConfigs[node.name];
          if (attrsConfig && attrsConfig.length > 0) {
            if (!node.startTag) {
              return;
            }
            if (
              node.startTag.attributes &&
              node.startTag.attributes.length > 0
            ) {
              // use map to record loop
              const recordMap = new Map();
              attrsConfig.forEach((item) => {
                if (typeof item === "string") {
                  recordMap.set(item, null);
                } else {
                  recordMap.set(item.key, item.value);
                }
              });

              // match WXAttributes
              const attributes = node.startTag.attributes;
              attributes.forEach((node) => {
                if (node.key) {
                  if (recordMap.has(node.key)) {
                    if (recordMap.get(node.key) === null) {
                      // matched !
                      recordMap.delete(node.key);
                    } else if (typeof recordMap.get(node.key) === "string") {
                      if (node.value === recordMap.get(node.key)) {
                        // matched !
                        recordMap.delete(node.key);
                      }
                    }
                  }
                }
              });

              // gen message
              if (recordMap.size > 0) {
                let attrsArr = [];
                recordMap.forEach((val, key) => {
                  if (val) {
                    attrsArr.push(`"${key}=${val}"`);
                  } else {
                    attrsArr.push(`"${key}"`);
                  }
                });
                // report lint message
                context.report({
                  node: node.startTag ? node.startTag : node,
                  messageId: "missingAttributes",
                  data: { tag: node.name, attrs: attrsArr.join(",") },
                });
              }
            } else {
              const attrs = attrsConfig
                .map((item) => {
                  if (typeof item === "string") {
                    return `"${item}"`;
                  } else {
                    return `"${item.key}='${item.value}'"`;
                  }
                })
                .join(",");
              context.report({
                node: node.startTag ? node.startTag : node,
                messageId: "missingAttributes",
                data: { tag: node.name, attrs },
              });
            }
          }
        }
      },
    };
  },
};
