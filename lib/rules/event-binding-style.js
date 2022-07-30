const COLON_STYLE = "colon";
const NORMAL_STYLE = "no-colon";

module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "suggestion",
    docs: {
      description: "force using same evenet binding style",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/event-binding-style.html",
    },
    fixable: null,
    messages: {
      colonStyle: "event binding must use colon style like {{type}}:{{func}}",
      noColonStyle:
        "event binding must use no-colon style like {{type}}{{func}}",
    },
    schema: [
      {
        enum: [COLON_STYLE, NORMAL_STYLE],
      },
    ],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    // https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
    // [mut-bind, capture-catch, capture-bind, bind, catch]
    const bindNames = [
      "bind",
      "catch",
      "mut-bind",
      "capture-bind",
      "capture-catch",
    ];
    const style = context.options[0];
    if (!style) return;

    return {
      WXAttribute(node) {
        if (!node.key) return;
        for (let i = 0; i < bindNames.length; i++) {
          if (style === COLON_STYLE) {
            if (
              node.key &&
              new RegExp(`^${bindNames[i]}`).test(node.key) &&
              !new RegExp(`^${bindNames[i]}:`).test(node.key)
            ) {
              context.report({
                node,
                messageId: "colonStyle",
                data: {
                  type: bindNames[i],
                  func: node.key.replace(bindNames[i], ""),
                },
              });
              break;
            }
          } else if (style === NORMAL_STYLE) {
            if (node.key && new RegExp(`^${bindNames[i]}:`).test(node.key)) {
              context.report({
                node,
                messageId: "noColonStyle",
                data: {
                  type: bindNames[i],
                  func: node.key.replace(`${bindNames[i]}:`, ""),
                },
              });
              break;
            }
          }
        }
      },
    };
  },
};
