/**
 * @file ESLint Configuration - Base
 * @see https://eslint.org/docs/user-guide/configuring
 */

const { Linter, Rule } = require('eslint')

/**
 * @type {Record<string, 0>}
 * @const RULES_OFF_JSDOC - All `jsdoc` rules turned off
 */
const RULES_OFF_JSDOC = (() => {
  /**
   * @type {{ rules: Rule.RuleModule }}
   * @const jsdoc - `eslint-plugin-jsdoc` module
   */
  const jsdoc = require('eslint-plugin-jsdoc')

  // Turn off all eslint-plugin-jsdoc rules
  return Object.keys(jsdoc.rules).reduce((acc, rule) => {
    acc[`jsdoc/${rule}`] = 0
    return acc
  }, {})
})()

/**
 * @type {Record<string, 0>}
 * @const RULES_OFF_TYPESCRIPT - All `@typescript-eslint` rules turned off
 */
const RULES_OFF_TYPESCRIPT = (() => {
  const { rules } = require('@typescript-eslint/eslint-plugin')

  // Turn off all @typescript-eslint rules
  return Object.keys(rules).reduce((acc, rule) => {
    acc[`@typescript-eslint/${rule}`] = 0
    return acc
  }, {})
})()

/**
 * @type {typeof import('tsconfig.json')}
 * @const tsconfig - Tsconfig object
 */
const tsconfig = require('tsconfig/dist/tsconfig').loadSync(__dirname).config

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  globals: {},
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: !!tsconfig.compilerOptions.jsx,
      impliedStrict: true
    },
    emitDecoratorMetadata: tsconfig.compilerOptions.emitDecoratorMetadata,
    extraFileExtensions: ['.mjs'],
    project: ['./tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: true
  },
  plugins: [
    '@typescript-eslint',
    'jsdoc',
    'node',
    'prettier',
    'promise',
    'unicorn'
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [
      2,
      {
        default: 'array',
        readonly: 'array'
      }
    ],
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/ban-ts-comment': [
      2,
      {
        minimumDescriptionLength: 3,
        'ts-nocheck': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-expect-error': 'allow-with-description'
      }
    ],
    '@typescript-eslint/ban-tslint-comment': 2,
    '@typescript-eslint/ban-types': [
      2,
      {
        extendDefaults: true,
        types: {}
      }
    ],
    '@typescript-eslint/brace-style': 2,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/class-literal-property-style': [2, 'getters'],
    '@typescript-eslint/comma-dangle': [
      2,
      {
        arrays: 'never',
        exports: 'never',
        functions: 'never',
        imports: 'never',
        objects: 'never'
      }
    ],
    '@typescript-eslint/comma-spacing': [2, { after: true, before: false }],
    '@typescript-eslint/consistent-indexed-object-style': [2, 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      2,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/consistent-type-exports': [
      2,
      {
        fixMixedExportsWithInlineTypeSpecifier: true
      }
    ],
    '@typescript-eslint/consistent-type-imports': 0,
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/dot-notation': [
      2,
      {
        allowIndexSignaturePropertyAccess: false,
        allowKeywords: true,
        allowPattern: undefined,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': [
      2,
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public'
        }
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      2,
      {
        allowArgumentsExplicitlyTypedAsAny: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowedNames: []
      }
    ],
    '@typescript-eslint/func-call-spacing': [2, 'never'],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/init-declarations': 0,
    '@typescript-eslint/keyword-spacing': [2, { after: true, before: true }],
    '@typescript-eslint/lines-between-class-members': [
      2,
      'always',
      {
        exceptAfterOverload: true,
        exceptAfterSingleLine: false
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': [
      2,
      {
        default: {
          memberTypes: [
            'static-field',
            'decorated-field',
            'instance-field',
            'abstract-field',

            'constructor',

            'signature',

            'static-get',
            'static-set',
            'static-method',

            'decorated-get',
            'decorated-set',
            'decorated-method',

            'instance-get',
            'instance-set',
            'instance-method',

            'abstract-get',
            'abstract-set',
            'abstract-method'
          ],
          order: 'alphabetically'
        }
      }
    ],
    '@typescript-eslint/method-signature-style': [2, 'method'],
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-base-to-string': [
      2,
      {
        ignoredTypeNames: ['RegExp']
      }
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 0,
    '@typescript-eslint/no-confusing-void-expression': [
      2,
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true
      }
    ],
    '@typescript-eslint/no-dupe-class-members': 2,
    '@typescript-eslint/no-duplicate-imports': 2,
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-empty-function': [
      2,
      {
        allow: ['constructors', 'decoratedFunctions']
      }
    ],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extra-non-null-assertion': 2,
    '@typescript-eslint/no-extra-parens': 0,
    '@typescript-eslint/no-extra-semi': 2,
    '@typescript-eslint/no-extraneous-class': [
      2,
      {
        allowConstructorOnly: false,
        allowEmpty: true,
        allowStaticOnly: true,
        allowWithDecorator: true
      }
    ],
    '@typescript-eslint/no-floating-promises': [
      2,
      {
        ignoreIIFE: false,
        ignoreVoid: true
      }
    ],
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-implicit-any-catch': [
      2,
      {
        allowExplicitAny: false
      }
    ],
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-invalid-this': [2, { capIsConstructor: true }],
    '@typescript-eslint/no-invalid-void-type': [
      2,
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false
      }
    ],
    '@typescript-eslint/no-loop-func': 2,
    '@typescript-eslint/no-loss-of-precision': 2,
    '@typescript-eslint/no-magic-numbers': 0,
    '@typescript-eslint/no-meaningless-void-operator': 0,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksConditionals: true,
        checksVoidReturn: true
      }
    ],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-redeclare': [
      2,
      {
        builtinGlobals: true,
        ignoreDeclarationMerge: true
      }
    ],
    '@typescript-eslint/no-redundant-type-constituents': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-restricted-imports': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowDestructuring: false,
        allowedNames: ['self']
      }
    ],
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      2,
      {
        allowComparingNullableBooleansToFalse: true,
        allowComparingNullableBooleansToTrue: true
      }
    ],
    '@typescript-eslint/no-unnecessary-condition': [
      2,
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
      }
    ],
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-arguments': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': [
      2,
      {
        typesToIgnore: []
      }
    ],
    '@typescript-eslint/no-unnecessary-type-constraint': 2,
    '@typescript-eslint/no-unsafe-argument': 2,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 2,
    '@typescript-eslint/no-unsafe-member-access': 2,
    '@typescript-eslint/no-unsafe-return': 2,
    '@typescript-eslint/no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
        enforceForJSX: true
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: false,
        vars: 'all'
      }
    ],
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        classes: true,
        enums: true,
        functions: true,
        ignoreTypeReferences: true,
        typedefs: true,
        variables: true
      }
    ],
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/no-useless-empty-export': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/non-nullable-type-assertion-style': 2,
    '@typescript-eslint/object-curly-spacing': [2, 'always'],
    '@typescript-eslint/padding-line-between-statements': 0,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-enum-initializers': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-includes': 0,
    '@typescript-eslint/prefer-literal-enum-member': [
      2,
      {
        allowBitwiseExpressions: true
      }
    ],
    '@typescript-eslint/prefer-namespace-keyword': 2,
    '@typescript-eslint/prefer-nullish-coalescing': [
      2,
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true
      }
    ],
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    '@typescript-eslint/prefer-readonly': 2,
    '@typescript-eslint/prefer-reduce-type-parameter': 2,
    '@typescript-eslint/prefer-regexp-exec': 2,
    '@typescript-eslint/prefer-return-this-type': 0,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/prefer-ts-expect-error': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/quotes': [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/require-await': 2,
    '@typescript-eslint/restrict-plus-operands': [
      2,
      {
        allowAny: false,
        checkCompoundAssignments: false
      }
    ],
    '@typescript-eslint/restrict-template-expressions': [
      2,
      {
        allowAny: false,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
        allowRegExp: true
      }
    ],
    '@typescript-eslint/return-await': [2, 'in-try-catch'],
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/sort-type-union-intersection-members': 2,
    '@typescript-eslint/space-before-blocks': [2, 'always'],
    '@typescript-eslint/space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    '@typescript-eslint/space-infix-ops': [2, { int32Hint: true }],
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowAny: false,
        allowNullableBoolean: true,
        allowNullableNumber: false,
        allowNullableObject: true,
        allowNullableString: true,
        allowNumber: true,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        allowString: true
      }
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/triple-slash-reference': [
      2,
      {
        lib: 'never',
        path: 'never',
        types: 'prefer-import'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': [
      2,
      {
        after: true,
        before: false,
        overrides: { arrow: { after: true, before: true } }
      }
    ],
    '@typescript-eslint/typedef': 0,
    '@typescript-eslint/unbound-method': [2, { ignoreStatic: true }],
    '@typescript-eslint/unified-signatures': 2,
    'array-bracket-newline': [2, 'consistent'],
    'array-element-newline': [2, 'consistent'],
    'brace-style': 0,
    'comma-dangle': 0,
    'comma-spacing': 0,
    'default-param-last': 0,
    'dot-notation': 0,
    eqeqeq: 1,
    'func-call-spacing': 0,
    indent: 0,
    'init-declarations': 0,
    'jsdoc/check-access': 1,
    'jsdoc/check-alignment': 1,
    'jsdoc/check-examples': 0,
    'jsdoc/check-indentation': [1, { excludeTags: ['description', 'example'] }],
    'jsdoc/check-line-alignment': 1,
    'jsdoc/check-param-names': [
      1,
      {
        allowExtraTrailingParamDocs: false,
        checkDestructured: true,
        checkRestProperty: true,
        disableExtraPropertyReporting: true,
        enableFixer: true
      }
    ],
    'jsdoc/check-property-names': [1, { enableFixer: true }],
    'jsdoc/check-syntax': 1,
    'jsdoc/check-tag-names': [
      1,
      {
        definedTags: ['fixme', 'link', 'maximum', 'minimum'],
        jsxTags: true
      }
    ],
    'jsdoc/check-types': [1, { unifyParentAndChildTypeChecks: true }],
    'jsdoc/check-values': 1,
    'jsdoc/empty-tags': 1,
    'jsdoc/implements-on-classes': 1,
    'jsdoc/match-description': 0,
    'jsdoc/match-name': 0,
    'jsdoc/multiline-blocks': 1,
    'jsdoc/newline-after-description': [1, 'always'],
    'jsdoc/no-bad-blocks': [1, { preventAllMultiAsteriskBlocks: true }],
    'jsdoc/no-defaults': 0,
    'jsdoc/no-missing-syntax': 0,
    'jsdoc/no-multi-asterisks': [
      1,
      {
        allowWhitespace: true,
        preventAtEnd: true,
        preventAtMiddleLines: true
      }
    ],
    'jsdoc/no-restricted-syntax': 0,
    'jsdoc/no-types': 0,
    'jsdoc/no-undefined-types': [
      1,
      {
        definedTypes: [
          'Chai',
          'JSX',
          'LoadHook',
          'LoadHookContext',
          'LoadHookResult',
          'LoaderHookFormat',
          'NodeJS',
          'ResolveFilename',
          'ResolveHook',
          'ResolveHookContext',
          'ResolveHookResult',
          'never',
          'unknown'
        ]
      }
    ],
    'jsdoc/require-asterisk-prefix': [1, 'always'],
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-description': [
      1,
      {
        checkConstructors: true,
        checkGetters: true,
        checkSetters: true,
        descriptionStyle: 'body'
      }
    ],
    'jsdoc/require-example': 0,
    'jsdoc/require-file-overview': [
      1,
      {
        tags: {
          file: {
            initialCommentsOnly: true,
            mustExist: true,
            preventDuplicates: true
          },
          module: {
            initialCommentsOnly: true,
            mustExist: true,
            preventDuplicates: true
          }
        }
      }
    ],
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-jsdoc': [
      1,
      {
        checkConstructors: true,
        checkGetters: true,
        checkSetters: true,
        enableFixer: true,
        exemptEmptyConstructors: true,
        exemptEmptyFunctions: false
      }
    ],
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-param': [
      1,
      {
        autoIncrementBase: 0,
        checkConstructors: true,
        checkDestructured: true,
        checkDestructuredRoots: true,
        checkGetters: true,
        checkRestProperty: true,
        checkSetters: true,
        enableFixer: true,
        enableRestElementFixer: true,
        enableRootFixer: true,
        unnamedRootBase: ['param'],
        useDefaultObjectProperties: true
      }
    ],
    'jsdoc/require-property': 1,
    'jsdoc/require-property-description': 1,
    'jsdoc/require-property-name': 1,
    'jsdoc/require-property-type': 1,
    'jsdoc/require-returns-check': [
      1,
      {
        exemptAsync: false,
        exemptGenerators: false,
        reportMissingReturnForUndefinedTypes: false
      }
    ],
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/require-returns': [
      1,
      {
        checkConstructors: false,
        checkGetters: true,
        forceRequireReturn: true,
        forceReturnsWithAsync: true
      }
    ],
    'jsdoc/require-throws': 1,
    'jsdoc/require-yields': [
      1,
      {
        forceRequireNext: true,
        forceRequireYields: true,
        next: true,
        nextWithGeneratorTag: true,
        withGeneratorTag: true
      }
    ],
    'jsdoc/require-yields-check': [
      1,
      {
        checkGeneratorsOnly: true,
        next: true
      }
    ],
    'jsdoc/sort-tags': 0,
    'jsdoc/tag-lines': [
      1,
      'any',
      {
        dropEndLines: true,
        count: 1,
        noEndLines: false,
        tags: {}
      }
    ],
    'jsdoc/valid-types': [1, { allowEmptyNamepaths: true }],
    'keyword-spacing': 0,
    'lines-between-class-members': 0,
    'no-array-constructor': 0,
    'no-case-declarations': 0,
    'no-duplicate-imports': 0,
    'no-empty-function': 0,
    'no-ex-assign': 0,
    'no-extra-parens': 0,
    'no-extra-semi': 0,
    'no-implied-eval': 0,
    'no-invalid-this': 0,
    'no-loop-func': 0,
    'no-loss-of-precision': 0,
    'no-magic-numbers': 0,
    'no-restricted-imports': 0,
    'no-return-await': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-useless-constructor': 0,
    'no-warning-comments': 0,
    'node/callback-return': [2, ['callback', 'cb', 'done', 'next']],
    'node/exports-style': [2, 'module.exports', { allowBatchAssign: true }],
    'node/file-extension-in-import': 0,
    'node/global-require': 0,
    'node/handle-callback-err': [2, '^(err|error)$'],
    'node/no-callback-literal': 2,
    'node/no-deprecated-api': 2,
    'node/no-exports-assign': 2,
    'node/no-extraneous-import': 0,
    'node/no-extraneous-require': 0,
    'node/no-missing-import': 0,
    'node/no-new-require': 2,
    'node/no-path-concat': 2,
    'node/no-process-env': 0,
    'node/no-process-exit': 2,
    'node/no-unpublished-bin': 0,
    'node/no-unpublished-import': 0,
    'node/no-unpublished-require': 0,
    'node/no-unsupported-features/es-builtins': 2,
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-unsupported-features/node-builtins': 2,
    'node/prefer-global/buffer': 2,
    'node/prefer-global/console': 2,
    'node/prefer-global/process': 2,
    'node/prefer-global/text-decoder': 2,
    'node/prefer-global/text-encoder': 2,
    'node/prefer-global/url': 2,
    'node/prefer-global/url-search-params': 2,
    'node/prefer-promises/dns': 2,
    'node/prefer-promises/fs': 2,
    'node/process-exit-as-throw': 2,
    'node/shebang': 0,
    'object-curly-spacing': 0,
    'padding-line-between-statements': 0,
    'prefer-arrow-callback': 0,
    'prettier/prettier': [2, require('./.prettierrc.json')],
    'promise/always-return': 2,
    'promise/avoid-new': 2,
    'promise/catch-or-return': [2, { allowFinally: true, allowThen: true }],
    'promise/no-callback-in-promise': 2,
    'promise/no-native': 0,
    'promise/no-nesting': 2,
    'promise/no-new-statics': 2,
    'promise/no-promise-in-callback': 2,
    'promise/no-return-in-finally': 2,
    'promise/no-return-wrap': [2, { allowReject: false }],
    'promise/param-names': 2,
    'promise/prefer-await-to-callbacks': 2,
    'promise/prefer-await-to-then': 2,
    'promise/valid-params': 2,
    quotes: 0,
    'require-await': 0,
    semi: 0,
    'sort-keys': [2, 'asc', { caseSensitive: true, minKeys: 2, natural: true }],
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'space-infix-ops': 0,
    'unicorn/better-regex': [2, { sortCharacterClasses: true }],
    'unicorn/catch-error-name': [2, { name: 'e' }],
    'unicorn/consistent-destructuring': 2,
    'unicorn/consistent-function-scoping': 2,
    'unicorn/custom-error-definition': 2,
    'unicorn/empty-brace-spaces': 2,
    'unicorn/error-message': 2,
    'unicorn/escape-case': 2,
    'unicorn/expiring-todo-comments': [
      2,
      {
        allowWarningComments: true,
        ignore: [],
        ignoreDatesOnPullRequests: true,
        terms: ['@fixme', '@todo']
      }
    ],
    'unicorn/explicit-length-check': 2,
    'unicorn/filename-case': [
      2,
      {
        cases: { kebabCase: true },
        ignore: [/^.mdx?/i]
      }
    ],
    'unicorn/import-index': 2,
    'unicorn/import-style': [
      2,
      {
        styles: {
          chalk: { default: true }
        }
      }
    ],
    'unicorn/new-for-builtins': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-array-callback-reference': 2,
    'unicorn/no-array-for-each': 2,
    'unicorn/no-array-method-this-argument': 2,
    'unicorn/no-array-push-push': 2,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-await-expression-member': 0,
    'unicorn/no-console-spaces': 2,
    'unicorn/no-empty-file': 2,
    'unicorn/no-for-loop': 0,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-instanceof-array': 2,
    'unicorn/no-keyword-prefix': [
      2,
      {
        checkProperties: false,
        disallowedPrefixes: ['class', 'new'],
        onlyCamelCase: true
      }
    ],
    'unicorn/no-lonely-if': 0,
    'unicorn/no-nested-ternary': 0,
    'unicorn/no-new-array': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-null': 0,
    'unicorn/no-object-as-default-parameter': 2,
    'unicorn/no-process-exit': 2,
    'unicorn/no-static-only-class': 0,
    'unicorn/no-thenable': 2,
    'unicorn/no-this-assignment': 2,
    'unicorn/no-unreadable-array-destructuring': 2,
    'unicorn/no-unsafe-regex': 2,
    'unicorn/no-unused-properties': 2,
    'unicorn/no-useless-fallback-in-spread': 2,
    'unicorn/no-useless-length-check': 2,
    'unicorn/no-useless-promise-resolve-reject': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/no-useless-undefined': 2,
    'unicorn/no-zero-fractions': 2,
    'unicorn/number-literal-case': 2,
    'unicorn/numeric-separators-style': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/prefer-array-find': 2,
    'unicorn/prefer-array-flat': [2, { functions: [] }],
    'unicorn/prefer-array-flat-map': 2,
    'unicorn/prefer-array-index-of': 2,
    'unicorn/prefer-array-some': 2,
    'unicorn/prefer-at': 0,
    'unicorn/prefer-code-point': 2,
    'unicorn/prefer-date-now': 2,
    'unicorn/prefer-default-parameters': 2,
    'unicorn/prefer-export-from': [2, { ignoreUsedVariables: true }],
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-json-parse-buffer': 2,
    'unicorn/prefer-math-trunc': 2,
    'unicorn/prefer-module': 2,
    'unicorn/prefer-negative-index': 2,
    'unicorn/prefer-node-protocol': 2,
    'unicorn/prefer-number-properties': 2,
    'unicorn/prefer-object-from-entries': [2, { functions: [] }],
    'unicorn/prefer-optional-catch-binding': 2,
    'unicorn/prefer-prototype-methods': 2,
    'unicorn/prefer-reflect-apply': 2,
    'unicorn/prefer-regexp-test': 2,
    'unicorn/prefer-set-has': 2,
    'unicorn/prefer-spread': 2,
    'unicorn/prefer-string-replace-all': 0,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-string-starts-ends-with': 2,
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/prefer-switch': 2,
    'unicorn/prefer-ternary': 2,
    'unicorn/prefer-top-level-await': 0,
    'unicorn/prefer-type-error': 2,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/relative-url-style': [2, 'never'],
    'unicorn/require-array-join-separator': 2,
    'unicorn/require-number-to-fixed-digits-argument': 2,
    'unicorn/string-content': [
      2,
      {
        patterns: {
          '^http:\\/\\/': '^https:\\/\\/'
        }
      }
    ],
    'unicorn/template-indent': [2, { indent: 2 }],
    'unicorn/text-encoding-identifier-case': 2,
    'unicorn/throw-new-error': 2
  },
  overrides: [
    {
      files: ['**/__tests__/*.spec.*'],
      env: {
        mocha: true
      },
      globals: {
        afterAll: true,
        afterEach: true,
        assert: true,
        beforeAll: true,
        beforeEach: true,
        chai: true,
        describe: true,
        expect: true,
        faker: true,
        htmlmin: true,
        it: true,
        pf: true,
        restoreConsole: true,
        sandbox: true,
        suite: true,
        test: true,
        vi: true,
        vitest: true
      },
      plugins: ['chai-expect', 'jest-formatting', 'mocha'],
      rules: {
        '@typescript-eslint/no-base-to-string': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        'chai-expect/missing-assertion': 2,
        'chai-expect/no-inner-compare': 2,
        'chai-expect/no-inner-literal': 2,
        'chai-expect/terminating-properties': [2, { properties: [] }],
        'jest-formatting/padding-around-after-all-blocks': 1,
        'jest-formatting/padding-around-after-each-blocks': 1,
        'jest-formatting/padding-around-before-all-blocks': 1,
        'jest-formatting/padding-around-before-each-blocks': 1,
        'jest-formatting/padding-around-describe-blocks': 1,
        'jest-formatting/padding-around-expect-groups': 1,
        'jest-formatting/padding-around-test-blocks': 1,
        'mocha/handle-done-callback': [0, { ignoreSkipped: false }],
        'mocha/max-top-level-suites': [2, { limit: 1 }],
        'mocha/no-async-describe': 2,
        'mocha/no-exclusive-tests': 2,
        'mocha/no-exports': 2,
        'mocha/no-global-tests': 2,
        'mocha/no-hooks': 0,
        'mocha/no-hooks-for-single-case': 0,
        'mocha/no-identical-title': 2,
        'mocha/no-mocha-arrows': 0,
        'mocha/no-nested-tests': 2,
        'mocha/no-pending-tests': 2,
        'mocha/no-return-and-callback': 2,
        'mocha/no-return-from-async': 2,
        'mocha/no-setup-in-describe': 0,
        'mocha/no-sibling-hooks': 2,
        'mocha/no-skipped-tests': 0,
        'mocha/no-synchronous-tests': [0, { allowed: ['async'] }],
        'mocha/no-top-level-hooks': 2,
        'mocha/prefer-arrow-callback': 2,
        'mocha/valid-suite-description': [
          2,
          {
            pattern: '^[.$#@a-z0-9(DELETE|GET|PATCH|POST|PUT)]*.+'
          }
        ],
        'mocha/valid-test-description': [2, { pattern: '^should.[a-z0-9]+.*' }],
        'promise/prefer-await-to-callbacks': 0,
        'promise/valid-params': 0,
        'unicorn/consistent-destructuring': 0,
        'unicorn/consistent-function-scoping': 0,
        'unicorn/explicit-length-check': 0,
        'unicorn/no-array-for-each': 0,
        'unicorn/prefer-at': 0,
        'unicorn/prefer-dom-node-append': 0,
        'unicorn/no-useless-undefined': 0
      }
    },
    {
      files: [
        '**/enums/*.ts',
        '**/interfaces/*.ts',
        '**/types/*.ts',
        '*.props.ts',
        '*.types.ts'
      ],
      rules: {
        'jsdoc/check-indentation': 0,
        'unicorn/no-keyword-prefix': 0
      }
    },
    {
      files: ['.*.*', 'babel.config.cjs', 'vitest.config.ts'],
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
    },
    {
      files: ['*.cjs', '*.js', '*.md/*.js', '*.mjs'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-implicit-any-catch': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/restrict-template-expressions': 0
      }
    },
    {
      files: ['*.cjs', '*.js', '*.md/*.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/no-var-requires': 0,
        'unicorn/prefer-module': 0
      }
    },
    {
      files: ['*.cts', '*.d.ts', '*.ts', '*.tsx'],
      rules: {
        'no-undef': 0
      }
    },
    {
      files: ['*.cts'],
      rules: {
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/no-var-requires': 0,
        'unicorn/prefer-module': 0
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/lines-between-class-members': 0,
        '@typescript-eslint/no-redundant-type-constituents': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        'jsdoc/no-undefined-types': 0,
        'jsdoc/require-file-overview': 0,
        'no-var': 0,
        'unicorn/filename-case': 0,
        'unicorn/no-empty-file': 0,
        'unicorn/no-keyword-prefix': 0
      }
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      extends: ['plugin:jsonc/prettier'],
      parser: require.resolve('jsonc-eslint-parser'),
      parserOptions: {},
      plugins: ['jsonc'],
      rules: Object.assign({}, RULES_OFF_JSDOC, RULES_OFF_TYPESCRIPT, {
        'jsonc/no-bigint-literals': 2,
        'jsonc/no-regexp-literals': 2,
        'jsonc/no-template-literals': 2,
        'jsonc/no-undefined-value': 2,
        'jsonc/sort-array-values': [
          2,
          {
            order: { caseSensitive: true, type: 'asc' },
            pathPattern: '^$'
          }
        ],
        'jsonc/sort-keys': [
          2,
          {
            order: [
              'name',
              'description',
              'version',
              'homepage',
              'repository',
              'bugs',
              'scripts',
              'dependencies',
              'devDependencies',
              'optionalDependencies',
              'peerDependencies',
              'resolutions',
              'engines',
              'packageManager',
              'readme',
              'sideEffects'
            ],
            pathPattern: '^$'
          },
          {
            order: { caseSensitive: true, type: 'asc' },
            pathPattern: '^$'
          }
        ],
        'jsonc/no-number-props': 2,
        'jsonc/no-octal-escape': 2,
        'jsonc/no-sparse-arrays': 2,
        'jsonc/no-useless-escape': 2,
        'jsonc/valid-json-number': 2,
        'jsonc/vue-custom-block/no-parsing-error': 2
      })
    },
    {
      files: ['*.json', '*.jsonc'],
      extends: ['plugin:jsonc/prettier'],
      parser: require.resolve('jsonc-eslint-parser'),
      parserOptions: {},
      plugins: ['jsonc'],
      rules: {
        'jsonc/no-binary-expression': 2,
        'jsonc/no-binary-numeric-literals': 2,
        'jsonc/no-escape-sequence-in-identifier': 2,
        'jsonc/no-hexadecimal-numeric-literals': 2,
        'jsonc/no-infinity': 2,
        'jsonc/no-multi-str': 2,
        'jsonc/no-nan': 2,
        'jsonc/no-numeric-separators': 2,
        'jsonc/no-octal': 0,
        'jsonc/no-octal-numeric-literals': 2,
        'jsonc/no-parenthesized': 2,
        'jsonc/no-plus-sign': 2,
        'jsonc/no-unicode-codepoint-escapes': 2
      }
    },
    {
      files: ['*.json'],
      extends: ['plugin:jsonc/prettier'],
      parser: require.resolve('jsonc-eslint-parser'),
      parserOptions: {},
      plugins: ['jsonc'],
      rules: {
        'jsonc/no-comments': 2
      }
    },
    {
      files: ['*.md', '*.mdx'],
      parser: require.resolve('eslint-plugin-markdownlint/parser'),
      parserOptions: {},
      plugins: ['markdown', 'markdownlint'],
      processor: 'markdown/markdown',
      rules: Object.entries(require('./.markdownlint.cjs')).reduce((acc, e) => {
        if (/^md\d+/i.test(e[0])) acc[`markdownlint/${e[0]}`] = [1, e[1]]
        return acc
      }, {}),
      overrides: [
        {
          files: [
            '*.md/*.js',
            '*.md/*.ts',
            '*.md/*.tsx',
            '*.mdx/*.ts',
            '*.mdx/*.tsx'
          ],
          parser: require.resolve('@typescript-eslint/parser')
        }
      ]
    },
    {
      files: ['*.yml'],
      parser: require.resolve('yaml-eslint-parser'),
      parserOptions: {},
      plugins: ['yml'],
      rules: Object.assign({}, RULES_OFF_JSDOC, RULES_OFF_TYPESCRIPT, {
        'spaced-comment': 0,
        'yml/block-mapping': 2,
        'yml/block-mapping-question-indicator-newline': [2, 'never'],
        'yml/block-sequence': 2,
        'yml/block-sequence-hyphen-indicator-newline': [2, 'never'],
        'yml/flow-mapping-curly-newline': 2,
        'yml/flow-mapping-curly-spacing': [
          2,
          'always',
          {
            arraysInObjects: false,
            objectsInObjects: false
          }
        ],
        'yml/flow-sequence-bracket-newline': 2,
        'yml/flow-sequence-bracket-spacing': [
          2,
          'always',
          {
            arraysInArrays: false,
            objectsInArrays: false,
            singleValue: false
          }
        ],
        'yml/indent': [2, 2],
        'yml/key-name-casing': [
          2,
          {
            SCREAMING_SNAKE_CASE: true,
            camelCase: false,
            'kebab-case': true,
            snake_case: true
          }
        ],
        'yml/key-spacing': 2,
        'yml/no-empty-document': 0,
        'yml/no-empty-key': 2,
        'yml/no-empty-mapping-value': 0,
        'yml/no-empty-sequence-entry': 2,
        'yml/no-irregular-whitespace': 2,
        'yml/no-multiple-empty-lines': [2, { max: 2, maxBOF: 0, maxEOF: 1 }],
        'yml/no-tab-indent': 2,
        'yml/plain-scalar': [2, 'always'],
        'yml/quotes': [2, { avoidEscape: true, prefer: 'single' }],
        'yml/require-string-key': 2,
        'yml/sort-keys': [
          2,
          {
            order: { caseSensitive: true, type: 'asc' },
            pathPattern: '^$'
          }
        ],
        'yml/sort-sequence-values': [
          2,
          {
            order: { caseSensitive: true, type: 'asc' },
            pathPattern: '^$'
          }
        ],
        'yml/spaced-comment': 2
      })
    },
    {
      files: ['tsconfig*.json'],
      rules: {
        'jsonc/no-comments': 0
      }
    },
    {
      files: ['.eslintrc.*', '.lintstagedrc.cjs'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        'sort-keys': 0
      }
    },
    {
      files: ['.eslintrc.*'],
      rules: {
        '@typescript-eslint/no-unsafe-argument': 0,
        'unicorn/string-content': 0
      }
    },
    {
      files: ['.github/dependabot.yml', '.github/workflows/*.yml'],
      rules: {
        'yml/sort-keys': 0
      }
    },
    {
      files: ['.github/workflows/no-response-handler.yml', '.yarnrc.yml'],
      rules: {
        'yml/key-name-casing': 0
      }
    }
  ],
  settings: {
    jsdoc: {
      augmentsExtendsReplacesDocs: true,
      ignorePrivate: false,
      implementsReplacesDocs: true,
      overrideReplacesDocs: true,
      structuredTags: {
        const: {
          name: 'namepath-defining',
          required: ['name']
        },
        enum: {
          name: 'namepath-defining',
          required: ['name', 'type']
        },
        extends: {
          name: 'namepath-defining',
          required: ['type']
        },
        implements: {
          name: 'namepath-defining',
          required: ['type']
        },
        member: {
          name: 'namepath-defining',
          required: ['name', 'type']
        },
        param: {
          name: 'namepath-defining',
          required: ['name', 'type']
        },
        return: {
          name: 'namepath-defining',
          required: ['type']
        },
        throws: {
          name: 'namepath-defining',
          required: ['type']
        },
        var: {
          name: 'namepath-defining',
          required: ['name']
        },
        yield: {
          name: 'namepath-defining',
          required: ['type']
        }
      },
      tagNamePreference: {
        augments: 'extends',
        constant: 'const',
        fileoverview: 'file',
        member: 'member',
        returns: 'return',
        var: 'var',
        yields: 'yield'
      }
    },
    utils: {
      RULES_OFF_JSDOC,
      RULES_OFF_TYPESCRIPT
    }
  }
}

module.exports = config
