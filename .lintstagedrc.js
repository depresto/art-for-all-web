// lint-staged.config.js
module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc --skipLibCheck --noEmit',
    'eslint --cache --fix',
    'organize-imports-cli',
    'prettier --write',
    'git add',
  ],
}
