<template>
  <div class="eslint-code-container">
    <eslint-editor
      :linter="linter"
      :config="config"
      :code="code"
      :style="{ height }"
      class="eslint-code-block"
      :filename="filename"
      :language="language"
      :preprocess="preprocess"
      :postprocess="postprocess"
      dark
      :format="format"
      :fix="fix"
    />
  </div>
</template>

<script>
import EslintEditor from 'vue-eslint-editor'
import { rules, processors } from '../../../../'

export default {
  name: 'ESLintCodeBlock',
  components: { EslintEditor },

  props: {
    fix: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Object,
      default() {
        return {}
      }
    },
    filename: {
      type: String,
      default: 'example.wxml'
    },
    language: {
      type: String,
      default: 'html'
    }
  },

  data() {
    return {
      linter: null,
      preprocess: processors['wxml'].preprocess,
      postprocess: processors['wxml'].postprocess,
      format: {
        insertSpaces: true,
        tabSize: 2
      }
    }
  },

  computed: {
    config() {
      return {
        rules: this.rules,
        parser: '@wxml/parser'
      }
    },

    code() {
      return `${this.computeCodeFromSlot(this.$slots.default).trim()}\n`
    },

    height() {
      const lines = this.code.split('\n').length
      return `${Math.max(120, 19 * lines)}px`
    }
  },

  methods: {
    computeCodeFromSlot(nodes) {
      if (!Array.isArray(nodes)) {
        return ''
      }
      return nodes
        .map((node) => node.text || this.computeCodeFromSlot(node.children))
        .join('')
    }
  },

  async mounted() {
    // Load linter.
    const [{ Linter }, { parseForESLint }] = await Promise.all([
      import('eslint/lib/linter'),
      import('espree').then(() => import('@wxml/parser'))
    ])

    const linter = (this.linter = new Linter())

    for (const ruleId of Object.keys(rules)) {
      linter.defineRule(`wxml/${ruleId}`, rules[ruleId])
    }

    linter.defineParser('@wxml/parser', { parseForESLint })
  }
}
</script>

<style>
.eslint-code-container {
  border-radius: 6px;
  padding: 1.25rem 0;
  margin: 1em 0;
  background-color: #1e1e1e;
}

.eslint-code-block {
  width: 100%;
}

.eslint-editor-actions {
  bottom: -0.9rem;
}
</style>