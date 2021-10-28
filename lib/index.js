"use strict";

module.exports = {
  rules: {
    "colon-style-event-binding": require("./rules/colon-style-event-binding"),
    "empty-tag-self-closing": require("./rules/empty-tag-self-closing"),
    "forbid-tags": require("./rules/forbid-tags"),
    "max-depth": require("./rules/max-depth"),
    "max-len": require("./rules/max-len"),
    "max-lines": require("./rules/max-lines"),
    "no-const-and-let-in-wxs": require("./rules/no-const-and-let-in-wxs"),
    "no-dot-this-in-wx-key": require("./rules/no-dot-this-in-wx-key"),
    "no-duplicate-attributes": require("./rules/no-duplicate-attributes"),
    "no-index-in-wx-key": require("./rules/no-index-in-wx-key"),
    "no-dynamic-wx-key": require("./rules/no-dynamic-wx-key"),
    "no-inline-wxs": require("./rules/no-inline-wxs"),
    "no-unexpected-string-bool": require("./rules/no-unexpected-string-bool"),
    "no-unnecessary-block": require("./rules/no-unnecessary-block"),
    "no-vue-directive": require("./rules/no-vue-directive"),
    quotes: require("./rules/quotes"),
    "report-wxs-syntax-error": require("./rules/report-wxs-syntax-error"),
    "report-wxml-syntax-error": require("./rules/report-wxml-syntax-error"),
    "required-attributes": require("./rules/required-attributes"),
    "wx-key": require("./rules/wx-key"),
    "wxs-module-prop": require("./rules/wxs-module-prop"),
    "wxs-must-be-top-level": require("./rules/wxs-must-be-top-level"),
  },
  configs: {},
  processors: {
    wxml: require("./processor"),
  },
};
