const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/event-binding-style");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("event-binding-style", rule, {
  valid: [
    {
      code: `<view id="outer" bindtap="handleTap1" />`,
      options: ["no-colon"],
    },
    {
      code: `<view id="outer" capture-catch:tap="handleTap1" />`,
      options: ["colon"],
    },
  ],
  invalid: [
    {
      code: `<view id="outer" bindtap="handleTap1" />`,
      options: ["colon"],
      errors: [
        {
          messageId: "colonStyle",
          data: {
            type: "bind",
            func: "tap",
          },
        },
      ],
    },
    {
      code: `<view id="outer" bind:touchmove="handleTap1" />`,
      options: ["no-colon"],
      errors: [`event binding must use no-colon style like bindtouchmove`],
    },
  ],
});
