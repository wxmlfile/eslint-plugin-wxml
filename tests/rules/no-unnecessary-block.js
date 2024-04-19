const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-unnecessary-block");

tester.run("no-unnecessary-block", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<block> <view /> text </block>`,
    },
    {
      filename: "test.wxml",
      code: `<block />`,
    },
    {
      filename: "test.wxml",
      code: `<block></block>`,
    },
    {
      filename: "test.wxml",
      code: `<block> {{show}} </block>`,
    },
    {
      filename: "test.wxml",
      code: `<block> <view /> <popup /> </block>`,
    },
    {
      filename: "test.wxml",
      code: `<block wx:if="{{showV2List}}"> <list wx:for="{{GoodsList}}" /> </block>`,
    },
    {
      filename: "test.wxml",
      code: `<block wx:elif="{{showV2List}}"> <list wx:for="{{GoodsList}}" /> </block>`,
    },
    {
      filename: "test.wxml",
      code: `<block wx:else > <list wx:for="{{GoodsList}}" /> </block>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<block> <view />  </block>`,
      errors: [{ messageId: "unnecessaryWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<block /> <view />`,
      errors: [{ messageId: "unnecessaryWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<block wx:if="{{show}}"> <view><sub-view /></view>  </block>`,
      errors: [{ messageId: "unnecessaryWarn" }],
    },
    {
      filename: "test.wxml",
      code: `
        <block wx:if="{{show}}">
          <view>
           <sub-view />
          </view>
        </block>
      `,
      errors: [{ messageId: "unnecessaryWarn" }],
    },
    {
      filename: "test.wxml",
      code: `<block> <list wx:for="{{GoodsList}}" /> </block>`,
      errors: [{ messageId: "unnecessaryWarn" }],
    },
  ],
});
