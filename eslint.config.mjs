import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier'; // Statik import

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/*',
      'dist/*',
      'build/*',
      'coverage/*',
      '*.min.js',
      '*.log',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'max-len': [
        'error',
        {
          code: 200,
          ignoreUrls: true,
          ignoreComments: true,
          ignoreStrings: true,
        },
      ],
      'no-console': ['warn', { allow: ['error'] }],
      eqeqeq: 'warn',
      'no-duplicate-imports': 'error',
    },
  },
  {
    files: ['src/shared/ui/**/*.{js,ts,jsx,tsx}'],
    rules: {
      'max-len': 'off',
    },
  },
];

export default eslintConfig;
