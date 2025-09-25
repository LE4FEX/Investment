import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettier,
  {
    files: ['src/**/*.{js,jsx}', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        FileReader: 'readonly',
        setTimeout: 'readonly',
        alert: 'readonly',
        confirm: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
      },
    },
    rules: {
      'import/no-unresolved': 'off',
    },
  },
];
