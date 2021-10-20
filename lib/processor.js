"use strict";

/**
 * @typedef {import('eslint').Linter.LintMessage} LintMessage
 */

module.exports = {
  /** @param {string} code */
  preprocess(code) {
    return [code];
  },

  /**
   * @param {LintMessage[][]} messages
   * @returns {LintMessage[]}
   */
  postprocess(messages) {
    return messages[0];
  },

  supportsAutofix: false,
};
