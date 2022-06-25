---
sidebarDepth: 0
---

# Home

<div align="center">
    <a href="https://www.npmjs.com/package/eslint-plugin-wxml" ><img src="https://funimg.pddpic.com/mobile_piggy/4d0f5a17-574b-4fbc-aee1-1b0cbb1c46dd.png.slim.c1.png" width="150" height="150"></a>
    <h1>eslint-plugin-wxml</h1>
</div>

![npm version](https://img.shields.io/npm/v/eslint-plugin-wxml)
![CI](https://github.com/wxmlfile/eslint-plugin-wxml/actions/workflows/ci.yml/badge.svg)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Twitter Follow Author](https://img.shields.io/twitter/follow/s_chenlei)

### A [ESLint](https://eslint.org) plugin to lint [wxml](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml) files.

This plugin allows us to check the `.wxml` files with ESLint, finds `wxml` and `wxs(inline)` syntax errors and some wxml style check.

ESLint editor integrations are useful to check your code in real-time.

### Show Case

![vscode eslint-plugin-wxml](https://funimg.pddpic.com/mobile_piggy/3c944e77-0792-4bee-a137-aa6922d94cfb.gif)

## For VSCode User

create `.vscode` folder and `settings.json` file, add `wxml` in `eslint.validate` config.

```bash
.vscode/
  settings.json
```
add `.wxml` for eslint
```diff
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
+    "wxml"
  ]
}
```

## For Webstorm User

> Version must >= *2021.1*, please read [Webstorm 2021.1 release log](https://blog.jetbrains.com/webstorm/2021/04/webstorm-2021-1/#configurable_scope_for_eslint)

![webstorm eslint](https://funimg.pddpic.com/mobile_piggy/b8d9f821-ce3d-4ddc-afe6-b9f0ac247c78.png.slim.png)

Add `wxml` in `Run for files` config !!!

## :traffic_light: Versioning policy

This plugin is following [Semantic Versioning](https://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## :newspaper: Changelog

We are using [GitHub Releases](https://github.com/wxmlfile/eslint-plugin-wxml/releases).

## :lock: License

See the [LICENSE](https://github.com/wxmlfile/eslint-plugin-wxml/blob/main/LICENSE) file for license rights and limitations (MIT).
