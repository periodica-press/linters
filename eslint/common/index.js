module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
};
