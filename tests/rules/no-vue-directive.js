const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-vue-directive");



tester.run("no-vue-directive", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<popup wx:if="{{false}}" />`,
    },
    {
      filename: "test.wxml",
      code: `<list wx:for="{{goodsList}}"  />`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<popup v-if="{{condition}}" />`,
      errors: [{ messageId: "vueDirectiveWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<app v-memo="{{data}}" />`,
      errors: [{ messageId: "vueDirectiveWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<dialog v-html="{{htmlStr}}" />`,
      errors: [{ messageId: "vueDirectiveWarn" }],
    },
  ],
});
