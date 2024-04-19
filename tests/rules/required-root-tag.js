const tester = require("../rule-tester-compat").RuleTester;
const rule = require("../../lib/rules/required-root-tag");



tester.run("required-root-tag", rule, {
  valid: [
    {
      code: ` <page><mall /></page> `,
      options: ["page"],
    },
    {
      code: `<page><mall /></page>`,
      options: [""],
    },
    {
      code: ` <page>
      aaa
    </page>  `,
      options: ["page"],
    },
  ],
  invalid: [
    {
      code: `<template>Main App</template>`,
      options: ["page"],
      errors: [
        {
          messageId: "rootTag",
          data: { tagName: "<page>" },
        },
      ],
    },
    {
      code: `<template>Main App</template><page />`,
      options: ["page"],
      errors: [
        {
          messageId: "rootTag",
          data: { tagName: "<page>" },
        },
      ],
    },
    {
      code: `<template>Main App</template><page><list /></page>`,
      options: ["page"],
      errors: [
        {
          messageId: "rootTag",
          data: { tagName: "<page>" },
        },
      ],
    },
  ],
});
