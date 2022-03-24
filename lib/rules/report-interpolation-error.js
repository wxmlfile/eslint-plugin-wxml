module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "report interpolation error",
      categories: [],
      url: "https://eslint-plugin-wxml.js.org/rules/report-interpolation-error.html",
    },
    fixable: null,
    messages: {
      interpolationError: "{{error}}",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXInterpolation(node) {
        let espreeParser;
        if (!(node && node.value)) {
          return;
        }
        try {
          // eslint-disable-next-line node/no-extraneous-require
          espreeParser = require("espree");
        } catch (_) {
          // ...
        }
        if (espreeParser) {
          try {
            espreeParser.parse(node.value, {
              ecmaVersion: espreeParser.latestEcmaVersion,
            });
          } catch (error) {
            try {
              espreeParser.parse(`({${node.value}})`, {
                ecmaVersion: espreeParser.latestEcmaVersion,
              });
            } catch (_) {
              try {
                espreeParser.parse(`(${node.value})`, {
                  ecmaVersion: espreeParser.latestEcmaVersion,
                });
              } catch (_) {
                context.report({
                  node,
                  messageId: "interpolationError",
                  data: {
                    error: error.message,
                  },
                });
              }
            }
          }
        }
      },
    };
  },
};
