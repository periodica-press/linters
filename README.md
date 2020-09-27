# Linter configs

## Install

## ESLint + Prettier

**`.eslintrc.js`**

```
module.exports = {
    extends: [
        './node_modules/@periodica/linters/eslint/base/prettier',
        './node_modules/@periodica/linters/eslint/react',
    ],
};
```

**`.prettierrc.js`**

```
module.exports = {
    ...require('@periodica/linters/prettier/prettier.config'),
};
```
