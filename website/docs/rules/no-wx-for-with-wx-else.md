---
sidebarDepth: 0
title: wxml/no-wx-for-with-wx-else
---

# wxml/no-wx-for-with-wx-else

### Backgroud

::: danger

You can't use `wx:for` with `wx:else` at same tag, it will cause wechat miniprogram compile error like follow :point_down:

![error](https://funimg.pddpic.com/mobile_piggy/92b100ee-5ced-4879-bc5d-90101bff1215.jpeg.slim.jpeg)

Releative official community discussion
* [using wx:for with wx:else at same tag error](https://developers.weixin.qq.com/community/develop/doc/00082a556fcb0810a6b7e2eee5b800)
* [using wx:if with wx:else at same time error](https://developers.weixin.qq.com/community/develop/doc/00020441c687e0e4beb7932cd51800)

:::

## Motivation

Force developer using `wx:for` without `wx:else`, that's wrong wxml grammer, so we need avoid the compile error.

<eslint-code-block :rules="{'wxml/no-wx-for-with-wx-else': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view wx:for="{{list}}"> {{item.name}}</view>
<view wx:if="{{showList}}" wx:for="{{list}}"> {{item.name}}</view>
<view wx:elif="{{showOtherList}}" wx:for="{{otherList}}"> {{item.name}}</view>
<!-- use <block /> to wrap loop list is official recommended -->
<view wx:if="{{showList}}" wx:for="{{list}}"> {{item.name}}</view>
<block wx:else>
  <view wx:for="{{otherList}}"> {{item.name}}</view>
</block>

<!-- ✗ BAD -->
<view wx:if="{{showList}}" wx:for="{{list}}"> {{item.name}}</view>
<view wx:else wx:for="{{lastList}}"> {{item.name}}</view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/no-wx-for-with-wx-else": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.5.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-wx-for-with-wx-else.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-wx-for-with-wx-else.js)
