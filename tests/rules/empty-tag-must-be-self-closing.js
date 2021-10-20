const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/empty-tag-must-be-self-closing");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("empty-tag-must-self-closing", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: `<app>{{interpolation}}</app>`,
    },
    {
      filename: "test.wxml",
      code: `<taro-app><swiper /><slider /></taro-app>`,
    },
    {
      filename: "test.wxml",
      code: `<taro-app><swiper> show </swiper><slider /></taro-app>`,
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: `<app><div class="goodsTags" >  </app></app>`,
      errors: [`empty wxml tag must be self closing`],
    },
    {
      filename: "test.wxml",
      code: `<app><div class="goodsTags" >
      
      </app></app>`,
      errors: [`empty wxml tag must be self closing`],
    },
  ],
});
