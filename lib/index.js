"use strict";

module.exports = {
  rules: {
    "empty-tag-must-be-self-closing": require("./rules/empty-tag-must-be-self-closing"),
    "forbid-tags": require("./rules/forbid-tags"),
    "no-dot-this-in-wx-key": require("./rules/no-dot-this-in-wx-key"),
    "no-duplicate-attributes": require("./rules/no-duplicate-attributes"),
    "no-index-in-wx-key": require("./rules/no-index-in-wx-key"),
    "no-unexpected-string-bool": require("./rules/no-unexpected-string-bool"),
    'no-vue-directive"': require("./rules/no-vue-directive"),
    "required-attributes": require("./rules/required-attributes"),
    "report-wxs-syntax-error": require("./rules/report-wxs-syntax-error"),
  },
  configs: {},
  processors: {
    wxml: require("./processor"),
  },
};
