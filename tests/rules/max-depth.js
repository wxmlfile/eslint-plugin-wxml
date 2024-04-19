const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/max-depth");



tester.run("max-depth", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view bind:touch="show" ></view>`,
      options: [3],
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `
        <view catchtap="clickHandler" >
          <view>
            <view>
              <view>{{name}}</view>
            </view>
          </view>
        </view>
      `,
      options: [3],
      errors: [
        {
          messageId: "depthWarn",
          data: {
            depth: 4,
            settingDepth: 3,
          },
        },
      ],
    },
  ],
});
