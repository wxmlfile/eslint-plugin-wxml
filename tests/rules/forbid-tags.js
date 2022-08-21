const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/forbid-tags");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("forbid-tags", rule, {
  valid: [
    {
      code: `<span> html5 tag </span>`,
      options: [],
    },
    {
      code: `<view class="tag"></view>`,
      options: [{ forbid: ["p"] }],
    },
    {
      code: "<Button />",
      options: [{ forbid: [{ tag: "button" }] }],
    },
    {
      code: "<view hover-class='button' />",
      options: [{ forbid: [{ tag: "view", skipAttrs: ["hover-class"] }] }],
    },
    {
      code: "<v class='button' />",
      options: [{ forbid: [{ tag: "v", disableAttrs: ["hover-class"] }] }],
    },
  ],
  invalid: [
    {
      code: "<button />",
      options: [{ forbid: ["button"] }],
      errors: [
        {
          messageId: "forbiddenTag",
          data: { tag: "button" },
        },
      ],
    },
    // can override previous config
    {
      code: "<div />",
      options: [
        {
          forbid: [
            { tag: "div", message: "use <view> instead" },
            { tag: "div", message: "use <view2> instead" },
          ],
        },
      ],
      errors: [
        {
          messageId: "forbiddenTagWithMessage",
          data: { tag: "div", message: "use <view2> instead" },
        },
      ],
    },
    // user case for forbid html5 tags
    {
      code: "<div><span><p /></span></div>",
      options: [
        {
          forbid: ["span", "div", "p"],
        },
      ],
      errors: [
        {
          messageId: "forbiddenTag",
          data: { tag: "div" },
        },
        {
          messageId: "forbiddenTag",
          data: { tag: "span" },
        },
        {
          messageId: "forbiddenTag",
          data: { tag: "p" },
        },
      ],
    },
    {
      code: "<view main='button' />",
      options: [
        {
          forbid: [
            {
              tag: "view",
              message:
                "<view> is forbidden, but if you want to set hover-class you must use <view />",
              skipAttrs: ["hover-class", "hover-start-time"],
            },
          ],
        },
      ],
      errors: [
        `<view> is forbidden, but if you want to set hover-class you must use <view />`,
      ],
    },
    {
      code: "<v hover-class='button' />",
      options: [
        {
          forbid: [
            { tag: "v", disableAttrs: ["hover-class", "hover-start-time"] },
          ],
        },
      ],
      errors: [
        `If you need to use the following attributes [hover-class, hover-start-time], you can't use <v />`,
      ],
    },
  ],
});
