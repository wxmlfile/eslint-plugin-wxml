const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/no-duplicate-attributes");



tester.run("no-duplicate-attributes", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<wxs module="utils" src="../../../utils.wxs" />`,
    },
    {
      filename: "test.wxml",
      code: `<vant-sticky><app /></vant-sticky>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<wxs module="utils" src src="@utils/check.wxs" src="../../../utils.wxs" />`,
      errors: [
        {
          messageId: "checkDuplicatedAttrs",
          data: { attrs: '"src"' },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: `<popup key="$key" key="m" value="val" value="val2" />`,
      errors: [
        {
          messageId: "checkDuplicatedAttrs",
          data: { attrs: '"key","value"' },
        },
      ],
    },
    // support parse failed situation
    {
      filename: "test.wxml",
      code: `<mall key="$key" key= value="val" value="val2" ></mall>`,
      errors: [
        {
          messageId: "checkDuplicatedAttrs",
          data: { attrs: '"key","value"' },
        },
      ],
    },
    // support multi error
    {
      filename: "test.wxml",
      code: `<mall key="$key" key="&key" > <app name="tom" name="kissy" ></app> </mall>`,
      errors: [
        {
          messageId: "checkDuplicatedAttrs",
          data: { attrs: '"key"' },
        },
        {
          messageId: "checkDuplicatedAttrs",
          data: { attrs: '"name"' },
        },
      ],
    },
  ],
});
