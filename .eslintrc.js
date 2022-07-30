module.exports = {
  parser: "@typescript-eslint/parser",
  overrideConfig: {},
  plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {
    "no-var": "error",
    "no-extra-semi": "error",
    "@typescript-eslint/indent": ["error", 2],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeature: {
      module: true,
    },
  },
};
