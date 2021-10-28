const fs = require("fs");
const path = require("path");
const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/max-lines");

const tester = new RuleTester({
  parser: require.resolve("@wxml/parser"),
});

function readFixureFiles(filename) {
  if (filename) {
    return fs.readFileSync(
      path.join(__dirname, "../fixtures/max-lines/" + filename),
      {
        encoding: "utf-8",
      }
    );
  } else {
    throw new Error("please provide valid filename");
  }
}

tester.run("max-lines", rule, {
  valid: [
    {
      filename: "test.wxml",
      code: readFixureFiles("blank-lines.wxml"),
      options: [{ max: 7, skipBlankLines: true }],
    },
    {
      filename: "test.wxml",
      code: readFixureFiles("eol.wxml"),
      options: [{ max: 10 }],
    },
    {
      filename: "test.wxml",
      code: readFixureFiles("normal.wxml"),
      options: [10],
    },
  ],
  invalid: [
    {
      filename: "test.wxml",
      code: readFixureFiles("blank-lines.wxml"),
      options: [{ max: 7 }],
      errors: [
        {
          messageId: "exceed",
          data: {
            actual: 9,
            max: 7,
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: readFixureFiles("eol.wxml"),
      options: [{ max: 9 }],
      errors: [
        {
          messageId: "exceed",
          data: {
            actual: 10,
            max: 9,
          },
        },
      ],
    },
    {
      filename: "test.wxml",
      code: readFixureFiles("normal.wxml"),
      options: [9],
      errors: [
        {
          messageId: "exceed",
          data: {
            actual: 10,
            max: 9,
          },
        },
      ],
    },
  ],
});
