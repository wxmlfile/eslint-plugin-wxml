const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/required-attributes");

tester.run("required-attributes", rule, {
  valid: [
    {
      code: `<img width="200px" src="show.png" />`,
      options: [{ tag: "img", attrs: ["width"] }],
    },
    {
      code: `<popup wx:if="{{$popupVisiable}}" useAnime />`,
      options: [
        {
          tag: "popup",
          attrs: [{ key: "wx:if", value: "{{$popupVisiable}}" }],
        },
        {
          tag: "modal",
          attrs: ["showMask"],
        },
      ],
    },
  ],
  invalid: [
    {
      code: "<popup />",
      options: [{ tag: "popup", attrs: ["name"] }],
      errors: [
        {
          messageId: "missingAttributes",
          data: { tag: "popup", attrs: '"name"' },
        },
      ],
    },
    {
      code: "<popup />",
      options: [
        {
          tag: "popup",
          attrs: ["name", { key: "wx:if", value: "{{$popupVisiable}}" }],
        },
      ],
      errors: [
        {
          messageId: "missingAttributes",
          data: {
            tag: "popup",
            attrs: '"name","wx:if=\'{{$popupVisiable}}\'"',
          },
        },
      ],
    },
    {
      code: `<mall a b="config" c="entry" b="trouble" /> <modal />`,
      options: [
        {
          tag: "mall",
          attrs: [
            "d",
            { key: "a", value: "you" },
            { key: "b", value: "config" },
          ],
        },
        {
          tag: "modal",
          attrs: ["showMask"],
        },
      ],
      errors: [
        {
          messageId: "missingAttributes",
          data: {
            tag: "mall",
            attrs: '"d","a=you"',
          },
        },
        {
          messageId: "missingAttributes",
          data: {
            tag: "modal",
            attrs: '"showMask"',
          },
        },
      ],
    },
  ],
});
