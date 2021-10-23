"use strict";

module.exports = {
  rules: {
    "empty-tag-self-closing": require("./rules/empty-tag-self-closing"),
    "forbid-tags": require("./rules/forbid-tags"),
    "no-inline-wxs": require("./rules/no-inline-wxs"),
    "no-const-and-let-in-wxs": require("./rules/no-const-and-let-in-wxs"),
    "no-dot-this-in-wx-key": require("./rules/no-dot-this-in-wx-key"),
    "no-duplicate-attributes": require("./rules/no-duplicate-attributes"),
    "no-index-in-wx-key": require("./rules/no-index-in-wx-key"),
    "no-unexpected-string-bool": require("./rules/no-unexpected-string-bool"),
    "no-vue-directive": require("./rules/no-vue-directive"),
    "required-attributes": require("./rules/required-attributes"),
    "report-wxs-syntax-error": require("./rules/report-wxs-syntax-error"),
    "report-wxml-syntax-error": require("./rules/report-wxml-syntax-error"),
    quotes: require("./rules/quotes"),
    "wxs-must-be-top-level": require("./rules/wxs-must-be-top-level"),
  },
  configs: {},
  processors: {
    wxml: require("./processor"),
  },
};
