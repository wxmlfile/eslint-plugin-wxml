module.exports = {
  /** @type {import('eslint').Rule.RuleMetaData} */
  meta: {
    type: "problem",
    docs: {
      description: "disallow using vue spec directive in wxml",
      categories: [],
      url: "https://eslint-plugin-wxml.vercel.app/rules/no-vue-directive.html",
    },
    fixable: null,
    messages: {
      vueDirectiveWarn: "don't use {{directive}} ! it's a vuejs v-directive",
    },
    schema: [],
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    return {
      WXAttribute(node) {
        if (node && node.key) {
          // https://v3.vuejs.org/api/directives.html
          const vDirectives = [
            "v-text",
            "v-html",
            "v-show",
            "v-if",
            "v-else",
            "v-else-if",
            "v-for",
            "v-on",
            "v-bind",
            "v-model",
            "v-slot",
            "v-pre",
            "v-cloak",
            "v-once",
            "v-memo",
            "v-is",
          ];
          if (vDirectives.indexOf(node.key) !== -1) {
            context.report({
              node,
              messageId: "vueDirectiveWarn",
              data: {
                directive: node.key,
              },
            });
          }
        }
      },
    };
  },
};
