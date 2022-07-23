/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

const { Linter } = require('eslint')
const base = require('./.eslintrc.base.cjs')
const web = require('./.eslintrc.web.cjs')

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  root: true,
  extends: ['./.eslintrc.web.cjs'],
  overrides: [
    ...base.overrides,
    ...web.overrides,
    {
      files: [
        '*.style.ts',
        '.storybook/config/viewports.ts',
        'src/enums/breakpoint.ts',
        'src/enums/font-size.ts',
        'src/enums/font-weight.ts',
        'src/enums/letter-spacing.ts',
        'src/enums/line-height.ts'
      ],
      rules: {
        'sort-keys': 0
      }
    },
    {
      files: ['**/*.style.ts', 'src/styles/base/fonts.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0
      }
    },
    {
      files: ['.storybook/decorators/with-tests.ts', '.storybook/preview.ts'],
      rules: {
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/no-var-requires': 0,
        'unicorn/prefer-module': 0
      }
    },
    {
      files: ['.storybook/main.ts', 'src/namespaces/style-prop-type.ts'],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    },
    {
      files: ['.storybook/main.ts'],
      rules: {
        '@typescript-eslint/dot-notation': 0
      }
    },
    {
      files: ['src/components/**'],
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/unbound-method': 0
      }
    },
    {
      files: [
        '.storybook/components/**/**/*',
        'src/components/**/**/*',
        'src/providers/**/*'
      ],
      rules: {
        'unicorn/filename-case': 0
      }
    },
    {
      // Storybook Docs doesn't properly format JSDoc comments
      files: ['src/components/**/**/*.tsx'],
      rules: {
        'jsdoc/require-param': 0,
        'jsdoc/require-returns': 0
      }
    },
    {
      files: ['src/utils/mdx/mdx.constants.tsx'],
      rules: {
        'jsx-a11y/heading-has-content': 0
      }
    },
    {
      files: ['src/namespaces/style-prop-type.ts'],
      rules: {
        '@typescript-eslint/no-redundant-type-constituents': 0
      }
    },
    {
      files: ['vite.config.ts'],
      rules: {
        'jsdoc/require-file-overview': [
          1,
          {
            tags: {
              file: {
                initialCommentsOnly: true,
                mustExist: true,
                preventDuplicates: true
              }
            }
          }
        ]
      }
    }
  ]
}

module.exports = config
