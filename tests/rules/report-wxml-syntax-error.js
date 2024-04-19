const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/report-wxml-syntax-error");



tester.run("report-wxml-syntax-error", rule, {
  valid: [
    {
      filename: "wxml.wxml",
      code: `<app> <main-page /> </app>`,
    },
    {
      filename: "wxml.wxml",
      code: `<app> <main-page /> </ app >`,
    },
    {
      filename: "wxml.wxml",
      code: `
<view>
  {{ OPTIONAL.default === type
      ? "xiaomi"
      : "meizu" }}
</view>
      `,
    },
    {
      filename: "wxml.wxml",
      code: `<wxs module="utils" ></wxs>`,
    },
    {
      filename: "wxml.wxml",
      code: `<wxs module="utils" >  </ wxs>`,
    },
    {
      filename: "wxml.wxml",
      code: `<wxs module="utils" > </ wxs >`,
    },
    {
      filename: "wxml.wxml",
      code: `<wxs module="utils" >  </wxs >`,
    },
    {
      filename: "wxml.wxml",
      code: `<block wx:if="{{currentIndex === index && item.status <= 2}}" ></block>`,
    },
    {
      filename: "wxml.wxml",
      code: `<view>{{ index < 3 : "{{}}</>" : '></}}{{' }}</view>"`,
    },
    {
      filename: "wxml.wxml",
      code: `<view>{{ }} {{ "" }} {{show}} {{ a < 90}}</view>"`,
    },
    {
      filename: "wxml.wxml",
      code: `{{ }} {{ "" }} {{show}} {{ a < 90}} }}"`,
    },
  ],
  invalid: [
    {
      filename: "wxml.wxml",
      code: `<wxs module="utils" /> var data = {}; module.exports = { data: data } </wxs>`,
      errors: [
        {
          messageId: "wxmlError",
          data: {
            error: "Expecting token of type --> EOF <-- but found --> '</' <--",
          },
        },
      ],
    },
    {
      filename: "wxml.wxml",
      code: `<wxs module="utils" /> {{ a > ' }} {{}}</wxs>`,
      errors: [
        {
          messageId: "wxmlError",
          data: {
            error:
              "unexpected character: ->'<- at offset: 30, skipped 1 characters.",
          },
        },
        {
          messageId: "wxmlError",
          data: {
            error: "Expecting token of type --> EOF <-- but found --> '</' <--",
          },
        },
      ],
    },
    {
      filename: "wxml.wxml",
      code: `
        <app key="value">
          {{ nihao '" }}
        </app>
      `,
      errors: [
        {
          messageId: "wxmlError",
          data: {
            error:
              "unexpected character: ->'<- at offset: 46, skipped 2 characters.",
          },
        },
      ],
    },
    {
      filename: "wxml.wxml",
      code: `<missing-close / <share-modal /> <bottom-bar />`,
      errors: [
        {
          messageId: "wxmlError",
          data: {
            error: `Expecting: one of these possible Token sequences:\n  1. [CLOSE]\n  2. [SLASH_CLOSE]\nbut found: '/'`,
          },
        },
      ],
    },
    {
      filename: "wxml.wxml",
      code: `{{}`,
      errors: [
        {
          messageId: "wxmlError",
          data: {
            error: `wx interpolation unexpected end`,
          },
        },
      ],
    },
    {
      filename: "wxml.wxml",
      code: `{{`,
      errors: [
        {
          messageId: "wxmlError",
          data: {
            error: `wx interpolation unexpected end`,
          },
        },
      ],
    },
  ],
});
