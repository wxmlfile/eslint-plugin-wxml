const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/colon-style-event-binding");

tester.run("colon-style-event-binding", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view bind:touch="show" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view bind:tap="clickHandler" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view catch:tap="clickHandler" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view capture-catch:tap="clickHandler" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view capture-bind:tap="clickHandler" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view mut-bind:tap="clickHandler" ></view>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<view catchtap="clickHandler" ></view>`,
      errors: [
        {
          messageId: "colonWarn",
          data: {
            type: "catch",
            func: "tap",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<view bindtouchstart="clickHandler" ></view>`,
      errors: [
        {
          messageId: "colonWarn",
          data: {
            type: "bind",
            func: "touchstart",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<view mut-bindtouchmove="clickHandler" ></view>`,
      errors: [
        {
          messageId: "colonWarn",
          data: {
            type: "mut-bind",
            func: "touchmove",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<view capture-catchtouchend="clickHandler" ></view>`,
      errors: [
        {
          messageId: "colonWarn",
          data: {
            type: "capture-catch",
            func: "touchend",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<view capture-bindtouchstart="clickHandler" ></view>`,
      errors: [
        {
          messageId: "colonWarn",
          data: {
            type: "capture-bind",
            func: "touchstart",
          },
        },
      ],
    },
  ],
});
