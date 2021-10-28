module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "suggestion",
    docs: {
      description: "set max length for sigle-line source code",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/max-len.html",
    },
    fixable: null,
    messages: {
      lenWarn:
        "This line has a length of {{lineLength}}. Maximum allowed is {{maxLength}}",
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
              code: {
                type: "integer",
                minimum: 0,
              },
              ignoreWhitespace: {
                type: "boolean",
              },
            },
            required: ["code"],
            additionalProperties: false,
          },
        ],
      },
      maxItems: 1,
    },
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    // get raw source code
    const sourceCode = context.getSourceCode();
    const lines = sourceCode.lines;

    // The options object must be the last option specified…
    const options = Object.assign(
      {},
      context.options[context.options.length - 1] || {}
    );

    if (typeof context.options[0] === "number") {
      options.code = context.options[0];
    }

    function checkProgramForMaxLength(node) {
      lines.forEach((line, i) => {
        // i is zero-indexed, line numbers are one-indexed
        const lineNumber = i + 1;
        // copy line
        let copyLine = line;
        // check ignoreWhitespace setting
        if (options.ignoreWhitespace) {
          copyLine = line.trim();
        }

        const maxLength = parseInt(options.code, 10);

        if (maxLength && copyLine.length > maxLength) {
          const loc = {
            start: {
              line: lineNumber,
              column: 0,
            },
            end: {
              line: lineNumber,
              column: line.length + 1,
            },
          };
          context.report({
            node: node,
            loc,
            messageId: "lenWarn",
            data: {
              lineLength: copyLine.length,
              maxLength,
            },
          });
        }
      });
    }

    return {
      Program: checkProgramForMaxLength,
    };
  },
};
