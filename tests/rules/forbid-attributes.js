const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/forbid-attributes");



tester.run("forbid-attributes", rule, {
  valid: [
    {
      code: `<span> html5 tag </span>`,
      options: [],
    },
    {
      code: `<view class="tag"></view>`,
      options: [{ forbid: ["className"] }],
    },
    {
      code: "<Button />",
      options: [{ forbid: [{ attr: "button" }] }],
    },
  ],
  invalid: [
    {
      code: "<button className='style' />",
      options: [{ forbid: ["className"] }],
      errors: [
        {
          messageId: "forbiddenAttr",
          data: { attr: "className" },
        },
      ],
    },
    {
      code: "<div className='style' />",
      options: [
        {
          forbid: [{ attr: "className", message: "please use class instead" }],
        },
      ],
      errors: [
        {
          messageId: "forbiddenAttrWithMessage",
          data: { attr: "className", message: "please use class instead" },
        },
      ],
    },
  ],
});
