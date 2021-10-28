const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/max-len");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("max-len", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view bind:touch="show" ></view>`,
      options: [100],
    },
    {
      filename: "test.wxml",
      code: `   <view catch:tap="click">wola</view>   `,
      options: [{ code: 36, ignoreWhitespace: true }],
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `   <view catchtap="click">niha</view>   `,
      options: [{ code: 30, ignoreWhitespace: true }],
      errors: [
        {
          messageId: "lenWarn",
          data: {
            lineLength: 34,
            maxLength: 30,
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<view catchtap="clickHandler">trim</view>`,
      options: [{ code: 30 }],
      errors: [
        {
          messageId: "lenWarn",
          data: {
            lineLength: 41,
            maxLength: 30,
          },
        },
      ],
    },
  ],
});
