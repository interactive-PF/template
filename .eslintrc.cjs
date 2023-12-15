module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    'jsx-a11y',
    'html',
    '@tanstack/query',
  ],
  rules: {
    'no-console': 'warn',
    'spaced-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    //# eslint-plugin-query
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',

    //# eslint-plugin-react
    'react/prop-types': 'off',
    'react/button-has-type': 'warn',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        shorthandFirst: true,
        callbacksLast: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        multiline: 'last',
      },
    ],

    //# eslint-plugin-import
    'import/order': [
      'off',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{./**/*.module.css,./**/*.css}',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'unknown'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    //# eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    //# eslint-plugin-jsx-a11y
    'jsx-a11y/anchor-has-content': [
      'warn',
      {
        components: ['Link'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
      },
    ],
  },
};
