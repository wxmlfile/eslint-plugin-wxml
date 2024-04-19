const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-wx-for-with-wx-else");

tester.run("no-wx-for-with-wx-else", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view wx:if="{{show}}" wx:for="{{GoodsList}}" >{{item.name}}</view>`,
    },
    {
      filename: "test.wxml",
      code: `<view wx:elif="{{item.show}}" wx:for="{{GoodsList}}" >{{item.name}}</view>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<view class="goodsItem" wx:else wx:for="{{GoodsList}}" >{{item.name}}</view>`,
      errors: [{ messageId: "compileWarn" }],
    },
  ],
});
