// https://eslint.org/docs/latest/use/configure/
// https://typescript-eslint.io/getting-started/
module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    // https://typescript-eslint.io/architecture/parser/#configuration
    project: "./typescript/tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
  ],
};
