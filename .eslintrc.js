// eslint-disable-next-line no-undef
module.exports = {
    extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: true,
      tsconfigRootDir: "../tsconfig.json",
    },
    root: true,
  };
