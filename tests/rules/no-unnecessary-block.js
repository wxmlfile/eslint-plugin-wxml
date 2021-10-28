const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-unnecessary-block");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("no-unnecessary-block", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<block> <view /> text </block>`,
    },
    {
      filename: "test.wxml",
      code: `<block> {{show}} </block>`,
    },
    {
      filename: "test.wxml",
      code: `<block> <view /> <popup /> </block>`,
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
  ],
});
