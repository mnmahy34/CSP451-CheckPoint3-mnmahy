const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script", // CommonJS style
      globals: {
        ...globals.node,   // adds require, module, __dirname, etc
        ...globals.jest    // adds test, expect, describe
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "@typescript-eslint/no-require-imports": "off"
    }
  }
];
