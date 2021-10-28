module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "enforce a maximum number of lines per file",
      recommended: false,
      url: "https://eslint-plugin-wxml.js.org/rules/max-lines.html",
    },
    schema: {
      type: "array",
      items: {
        oneOf: [
          {
            type: "integer",
            minimum: 0,
          },
          {
            type: "object",
            properties: {
              max: {
                type: "integer",
                minimum: 0,
              },
              skipBlankLines: {
                type: "boolean",
              },
            },
            required: ["max"],
            additionalProperties: false,
          },
        ],
      },
      maxItems: 1,
    },
    messages: {
      exceed:
        "File has too many lines ({{actual}}). Maximum allowed is {{max}}",
    },
  },

  create(context) {
    let max;

    // The options object must be the last option specified…
    const options = Object.assign(
      {},
      context.options[context.options.length - 1] || {}
    );

    if (typeof context.options[0] === "number") {
      options.max = context.options[0];
    }

    // set max
    max = options.max;

    // skip Blank Lines ?
    const skipBlankLines = options && options.skipBlankLines;

    // get source code
    const sourceCode = context.getSourceCode();

    return {
      "Program:exit"() {
        if (!(max && max > 0)) {
          return;
        }

        let lines = sourceCode.lines.map((text, i) => ({
          lineNumber: i + 1,
          text,
        }));

        /*
         * If file ends with a linebreak, `sourceCode.lines` will have one extra empty line at the end.
         * That isn't a real line, so we shouldn't count it.
         */
        if (lines.length > 1 && lines[lines.length - 1].text === "") {
          lines.pop();
        }

        if (skipBlankLines) {
          lines = lines.filter((l) => l.text.trim() !== "");
        }

        if (lines.length > max) {
          const loc = {
            start: {
              line: lines[max].lineNumber,
              column: 0,
            },
            end: {
              line: sourceCode.lines.length,
              column: sourceCode.lines[sourceCode.lines.length - 1].length,
            },
          };

          context.report({
            loc,
            messageId: "exceed",
            data: {
              max,
              actual: lines.length,
            },
          });
        }
      },
    };
  },
};
