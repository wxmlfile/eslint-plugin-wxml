const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-wx-for-with-wx-if");



tester.run("no-wx-for-with-wx-if", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view wx:for="{{GoodsList}}" >{{item.name}}</view>`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:if="{{item.show}}" >{{item.name}}</view>`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:if="{{item.show}}" >{{item.name}}</view><goods wx:else />`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<view wx:if="{{show}}" wx:for="{{GoodsList}}" >{{item.name}}</view>`,
      errors: [{ messageId: "compileWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<view wx:elif="{{show}}" wx:for="{{GoodsList}}" >{{item.name}}</view>`,
      errors: [{ messageId: "compileWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<view class="goodsItem" wx:else wx:for="{{GoodsList}}" >{{item.name}}</view>`,
      errors: [{ messageId: "compileWarn" }],
    },
  ],
});
