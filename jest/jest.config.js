module.exports = {
  // https://jestjs.io/docs/configuration
  rootDir: "..",
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/jest/spec/lib/*.test.js",
  ],
  collectCoverageFrom: [
    "<rootDir>/lib/*.js",
  ],
  coverageDirectory: "<rootDir>/jest/coverage",
  verbose: true,
  bail: true,
};
