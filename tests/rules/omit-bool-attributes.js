const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/omit-bool-attributes");

tester.run("omit-bool-attributes", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<view show ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view showBadge ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view showBadge="{{false}}" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view showBadge="{{index === 0 ? true : false}}" ></view>`,
    },
    {
      filename: "test.wxml",
      code: `<view class="a-{{true}}" ></view>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: '<swiper autoplay="{{true}}" />',
      errors: [
        {
          messageId: "omitWarn",
          data: {
            attrKey: "autoplay",
            true: "{{true}}",
            false: "{{false}}",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<swiper autoplay='{{true}}' />`,
      errors: [
        {
          messageId: "omitWarn",
          data: {
            attrKey: "autoplay",
            true: "{{true}}",
            false: "{{false}}",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: '<swiper autoplay=" {{true}} " />',
      errors: [
        {
          messageId: "omitWarn",
          data: {
            attrKey: "autoplay",
            true: "{{true}}",
            false: "{{false}}",
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: '<swiper autoplay="{{  true }}" />',
      errors: [
        {
          messageId: "omitWarn",
          data: {
            attrKey: "autoplay",
            true: "{{true}}",
            false: "{{false}}",
          },
        },
      ],
    },
  ],
});
