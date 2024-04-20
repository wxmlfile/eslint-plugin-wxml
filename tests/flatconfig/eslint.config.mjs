import wxml from "eslint-plugin-wxml";
import wxmlParser from "@wxml/parser";

export default [
  {
    files: ["**/*.wxml"],
    plugins: {
      wxml: wxml,
    },
    languageOptions: {
      parser: wxmlParser,
    },
    rules: {
      "wxml/colon-style-event-binding": "error",
    },
  },
];
