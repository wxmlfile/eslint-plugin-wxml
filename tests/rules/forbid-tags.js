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
  ],
});
