const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/required-tags");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("required-tags", rule, {
  valid: [
    {
      code: `<img width="200px" src="show.png" />`,
      options: [],
    },
    {
      code: `<popup>Main App</popup>`,
      options: ["popup"],
    },
  ],
  invalid: [
    {
      code: `<template>Main App</template>`,
      options: ["popup"],
      errors: [
        {
          messageId: "missingTags",
          data: { tags: "<popup />" },
        },
      ],
    },
    {
      code: `<app>Main</app>`,
      options: ["page", "popup"],
      errors: [
        {
          messageId: "missingTags",
          data: { tags: "<page />,<popup />" },
        },
      ],
    },
  ],
});
