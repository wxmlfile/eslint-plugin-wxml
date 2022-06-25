---
sidebarDepth: 0
title: no-restricted-syntax
---

# no-restricted-syntax

## Background

::: tip

`no-restricted-syntax` is a ESLint's builtin rule, allow you use specify [AST selectors](https://eslint.org/docs/latest/developer-guide/selectors) to restrict some syntax, allowing much more precise control over syntax patterns.

:::

## Motivation

This is not a eslint-plugin-wxml's feature, but you can use this rule directly, because it's ESLint's builtin support. Just doc this rule make your lint be more powerful.

## What syntax can selectors have?
The following selectors are supported:

* AST node type: `ForStatement`
* wildcard (matches all nodes): `*`
* attribute existence: `[attr]`
* attribute value: `[attr="foo"]` or `[attr=123]`
* attribute regex: `[attr=/foo.*/]` (with some [known issues](https://eslint.org/docs/latest/developer-guide/selectors#known-issues))
* attribute conditions: `[attr!="foo"]`, `[attr>2]`, `[attr<3]`, `[attr>=2]`, or `[attr<=3]`
* nested attribute: `[attr.level2="foo"]`
* field: `FunctionDeclaration > Identifier.id`
* First or last child: `:first-child or :last-child`
* nth-child (no ax+b support): `:nth-child(2)`
* nth-last-child (no ax+b support): `:nth-last-child(1)`
* descendant: `FunctionExpression ReturnStatement`
* child: `UnaryExpression > Literal`
* following sibling: `VariableDeclaration ~ VariableDeclaration`
* adjacent sibling: `ArrayExpression > Literal + SpreadElement`
* negation: `:not(ForStatement)`
* matches-any: `:matches([attr] > :first-child, :last-child)`
* class of AST node: `:statement`, `:expression`, `:declaration`, `:function`, or `:pattern`

This syntax is very powerful, and can be used to precisely select many syntactic patterns in your code.
The examples in this section were adapted from the [esquery](https://github.com/estools/esquery/) documentation.


<eslint-code-block :rules="{'no-restricted-syntax': ['error', 'WXAttribute[key=class][value=class]', 'WXScript']}" >

```wxml
<!-- ✓ GOOD -->
<view class="main"></view>

<!-- ✗ BAD -->

<!-- disable WXAttribute[key=\'class\'][value=\'class\'] -->
<view class="class"></view>
<!-- disable WXScript -->
<wxs src="../../utils.wxs" />
```
</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "no-restricted-syntax": ["error", "WXAttribute[key=class][value=class]", "WXScript"] }
```

## Version

This rule is `ESLint` __builtin support__, you can use it and don't need care the version of `eslint-plugin-wxml`.
