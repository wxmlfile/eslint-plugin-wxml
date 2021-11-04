/**
 * To match valid minprogram interpolation
 *
 * Valid:
 *   wx:elif="{{ show }}"
 *   wx:elif="{{ goods.length > 10 }}"
 *   wx:if="{{ index !== 0 }}"
 *
 * Invalid:
 *   wx:if="name-{{show}}"
 *   wx:if="name-{{show}"
 *   wx:if="  {{false}} "
 *   wx:if="  {{goodsList.length > 0}}"
 *   wx:elif="{show}"
 *   wx:elif="show"
 */
const INTPN_REG = /^{{[\s\S]*}}$/;

module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description:
        "string or dynamic string will make wx:if/wx:elif always be true",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/no-wx-if-string.html",
    },
    fixable: null,
    messages: {
      stringWarn:
        "please use valid bool interpolation as wx:if/wx:elif value, otherwise it will always be true",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      'WXAttribute[key="wx:if"]'(node) {
        if (node && node.value && !INTPN_REG.test(node.value)) {
          context.report({
            node: node,
            messageId: "stringWarn",
          });
        }
      },
      'WXAttribute[key="wx:elif"]'(node) {
        if (node && node.value && !INTPN_REG.test(node.value)) {
          context.report({
            node: node,
            messageId: "stringWarn",
          });
        }
      },
    };
  },
};
