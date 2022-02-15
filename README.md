# Linter configs

## Install

### Yarn

```
yarn add -D @periodica-press/linters
```

### NPM

```
npm i -D @periodica-press/linters
```

Package include `eslint@8` and `prettier@2` dependencies, so you should remove eslint, prettier internal dependencies from your project `package.json`.

## ESLint + Prettier

**`.eslintrc.js`**

```
module.exports = {
  extends: ['./node_modules/@periodica-press/linters/app'],
};
```

**`.prettierrc.js`**

```
module.exports = {
    ...require('@periodica-press/linters/prettier'),
};
```
