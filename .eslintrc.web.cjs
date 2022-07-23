/**
 * @file ESLint Configuration - Web
 * @see https://eslint.org/docs/user-guide/configuring
 */

const { Linter } = require('eslint')

/**
 * @type {typeof import('./.eslintrc.base.cjs')}
 * @const base - Base ESLint configuration
 */
const base = require('./.eslintrc.base.cjs')

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  env: {
    browser: true
  },
  extends: ['plugin:react/recommended', './.eslintrc.base.cjs'],
  plugins: [
    ...base.plugins,
    'html',
    'jsx-a11y',
    'react',
    'react-hooks',
    'testing-library'
  ],
  rules: {
    'jsx-a11y/alt-text': [
      2,
      {
        elements: ['img', 'input[type="image"]'],
        img: ['Image', 'ImageInput']
      }
    ],
    'jsx-a11y/anchor-has-content': [2, { components: ['Anchor'] }],
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        aspects: ['invalidHref', 'noHref', 'preferButton'],
        components: ['Link'],
        specialLink: []
      }
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 2,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/aria-proptypes': 2,
    'jsx-a11y/aria-role': 2,
    'jsx-a11y/aria-unsupported-elements': 2,
    'jsx-a11y/autocomplete-valid': [2, { inputComponents: ['Input'] }],
    'jsx-a11y/click-events-have-key-events': 2,
    'jsx-a11y/heading-has-content': [2, { components: ['Heading'] }],
    'jsx-a11y/html-has-lang': 2,
    'jsx-a11y/iframe-has-title': 2,
    'jsx-a11y/img-redundant-alt': [2, { components: ['Image'] }],
    'jsx-a11y/interactive-supports-focus': 2,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Input'],
        depth: 0,
        labelComponents: ['Label']
      }
    ],
    'jsx-a11y/lang': 2,
    'jsx-a11y/media-has-caption': [
      2,
      {
        audio: ['Audio'],
        video: ['Video'],
        track: ['Track']
      }
    ],
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-access-key': 2,
    'jsx-a11y/no-autofocus': 2,
    'jsx-a11y/no-distracting-elements': 2,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 2,
    'jsx-a11y/no-noninteractive-element-interactions': [
      2,
      {
        handlers: [
          'onClick',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onMouseDown',
          'onMouseUp'
        ]
      }
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 2,
    'jsx-a11y/no-noninteractive-tabindex': 2,
    'jsx-a11y/no-redundant-roles': 2,
    'jsx-a11y/no-static-element-interactions': [
      2,
      {
        handlers: [
          'onClick',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onMouseDown',
          'onMouseUp'
        ]
      }
    ],
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/scope': 2,
    'jsx-a11y/tabindex-no-positive': 2,
    'react/display-name': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-fragments': 0,
    'react/jsx-uses-react': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 1,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 1,
    'unicorn/no-document-cookie': 2,
    'unicorn/no-invalid-remove-event-listener': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/prefer-dom-node-append': 2,
    'unicorn/prefer-dom-node-dataset': 2,
    'unicorn/prefer-dom-node-remove': 2,
    'unicorn/prefer-dom-node-text-content': 2,
    'unicorn/prefer-keyboard-event-key': 2,
    'unicorn/prefer-modern-dom-apis': 2,
    'unicorn/prefer-query-selector': 2,
    'unicorn/require-post-message-target-origin': 2
  },
  overrides: [
    {
      files: ['**/__tests__/*.spec.tsx'],
      rules: {
        'react/display-name': 0,
        'react/no-children-prop': 0
      }
    },
    {
      files: ['*.html'],
      parser: require.resolve('@html-eslint/parser'),
      rules: Object.assign({}, ...Object.values(base.settings.utils), {}),
      settings: {
        'html/html-extensions': ['.html'],
        'html/indent': '+2',
        'html/report-bad-indent': 2
      }
    },
    {
      files: ['src/**'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          2,
          {
            paths: [
              {
                name: 'styled-components',
                message: "import from 'styled-components/macro'"
              }
            ],
            patterns: ['!styled-components/macro']
          }
        ]
      }
    }
  ],
  settings: {
    react: {
      version: require('./package.json').devDependencies.react
    }
  }
}

module.exports = config
