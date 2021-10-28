module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "suggestion",
    docs: {
      description: "force using colon style evenet binding",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/colon-style-event-binding.html",
    },
    fixable: null,
    messages: {
      colonWarn: 'missng ":" between {{type}} and {{func}}',
    },
    schema: [],
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
    return {
      WXAttribute(node) {
        if (!node.key) return;
        for (let i = 0; i < bindNames.length; i++) {
          if (
            node.key &&
            new RegExp(`^${bindNames[i]}`).test(node.key) &&
            !new RegExp(`^${bindNames[i]}:`).test(node.key)
          ) {
            context.report({
              node,
              messageId: "colonWarn",
              data: {
                type: bindNames[i],
                func: node.key.replace(bindNames[i], ""),
              },
            });
            break;
          }
        }
      },
    };
  },
};
