const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/report-interpolation-error");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

tester.run("report-interpolation-error", rule, {
  valid: [
    {
      filename: "interpolation.wxml",
      code: `<app> {{23}} </app>`,
    },
    {
      filename: "interpolation.wxml",
      code: `<app> {{ show ? 23 : ''}} </app>`,
    },
    {
      filename: "",
      code: `
        <view wx:if="{{CartStore.useBannerV2}}"
          bind:tap="clickBanner"
          class="wrapper"
          style="{{ banner.bgColor ? ('background-color: ' + banner.bgColor) : ''}}"
        />
      `,
    },
    {
      filename: "interpolation.wxml",
      code: `<app> {{  }} </app>`,
    },
    {
      filename: "interpolation.wxml",
      code: `
        <infinite-list
          rootMargin="600"
          bind:loadMore="loadMore"
          loading="{{tabList[selectTabIndex].isLoading}}"
          isUseGoTop="{{false}}"
          hasMore="{{tabList[selectTabIndex].hasMore}}"
        />
      `,
    },
    {
      filename: "interpolation.wxml",
      code: `<app> {{ a + b }} </app>`,
    },
    {
      filename: "interpolation.wxml",
      code: `<view class="progressBar" style="{{width ? ( 'width:' + width ) : ''}}">`,
    },
    {
      filename: "interpolation.wxml",
      code: `<view>{{"hello" + name}}</view>`,
    },
    {
      filename: "interpolation.wxml",
      code: `<view>{{object.key}} {{array[0]}}</view>`,
    },
    {
      filename: "interpolation.wxml",
      code: `<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>`,
    },
    {
      filename: "interpolation.wxml",
      code: `<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>`,
    },
    {
      filename: "interpolation.wxml",
      code: `
        <template is="navMain"
          data="{{ searchShadeWords: Store.searchShadeWords, hasSearch, gotoOrderList}}"
        />
      `,
    },
    {
      filename: "interpolation.wxml",
      code: `<template is="objectCombine" data="{{foo, bar}}"></template>`,
    },
    {
      filename: "interpolation.wxml",
      code: `ext_params_click="{{ { goods_id: log.goodsId, exps: log.stringifyExps } }}"`,
    },
    {
      filename: "interpolation.wxml",
      code: `<view data="{{ {...spreadData} }}">`
    },
    {
      filename: "interpolation.wxml",
      code: `<view data="{{ url, isTrue: x === y }}">`
    },
    {
      filename: "interpolation.wxml",
      code: `<view data="{{ url, isTrue: true }}">`
    },
    {
      filename: "interpolation.wxml",
      code: `<view data="{{ url, computed: calc(x, y) }}">`
    },
    {
      filename: "interpolation.wxml",
      code: `<view data="{{ ...spread, ...{ key: 'val' } }}">`
    },
    {
      filename: "interpolation.wxml",
      code: `<view data="{{ ...spread, ...{spread} }}">`
    }
  ],
  invalid: [
    {
      filename: "interpolation.wxml",
      code: `<app> {{ show ? 23 : }} </app>`,
      errors: [
        {
          messageId: "interpolationError",
          data: {
            error: "Unexpected token",
          },
        },
      ],
    },
    {
      filename: "interpolation.wxml",
      code: `<app> {{ show 23 : }} </app>`,
      errors: [
        {
          messageId: "interpolationError",
          data: {
            error: "Unexpected token 23",
          },
        },
      ],
    },
    {
      filename: "interpolation.wxml",
      code: `<app> {{ a + }} </app>`,
      errors: [
        {
          messageId: "interpolationError",
          data: {
            error: "Unexpected token",
          },
        },
      ],
    },
    {
      filename: "interpolation.wxml",
      code: `<app> {{ ..a, a: }} </app>`,
      errors: [
        {
          messageId: "interpolationError",
          data: {
            error: "Unexpected token .",
          },
        },
      ],
    },
    {
      filename: "interpolation.wxml",
      code: `<view style="idx-{{isOdd ? 'single' }}" />`,
      errors: [
        {
          messageId: "interpolationError",
          data: {
            error: "Unexpected token",
          },
        },
      ],
    },
  ],
});
