// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  "globals": {
    "$": true,
    "jQuery": true
   },
  // add your custom rules here
  'rules': {
    // identation
    "indent": ["warn", 4, {SwitchCase: 1}],
    // comma
    "comma-dangle": ["warn", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "ignore",
    }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // warnings later to be turned to errors
    "strict": "warn",
    "eqeqeq": "warn",
    "curly": "warn",
    "quotes": ["warn", "double"],
    "semi": "warn",
    "keyword-spacing": "warn",
    "space-before-blocks": "warn",
    "consistent-return": 0,
    "object-shorthand": "warn",
    "no-unused-vars": "warn",
    "space-infix-ops": "warn",
    "key-spacing": "warn",
    "object-curly-spacing": "warn",
    "arrow-spacing": "warn",
    "comma-spacing": "warn",
    "no-multi-spaces": "warn",
    "no-var": "warn",
    "padded-blocks": "warn",
    "import/newline-after-import": "warn",
    "eol-last": "off",
    "no-trailing-spaces": "warn",
    "vars-on-top": "warn",
    "space-in-parens": "warn",
    "spaced-comment": "warn",
    "brace-style": "warn",
    "arrow-parens": "warn",
    "prefer-const": "warn",
    "no-param-reassign": [1, { "props": false }],
    "no-unused-expressions": "warn",
    "no-else-return": "warn",
    "dot-notation": "warn",
    "no-shadow": "warn",
    "no-underscore-dangle": 0,
    "import/first": "warn",
    "no-extra-semi": "warn",
    "radix": 0,
    "no-plusplus": "warn",
    "semi-spacing": "warn",
    "camelcase": "warn",
    "prefer-template": "warn",
    "no-lonely-if": "warn",
    "no-sequences": "warn",
    "no-useless-escape": "warn",
    "block-spacing": "warn",
    "no-return-assign": "warn",
    "default-case": "warn",
    "one-var-declaration-per-line": "warn",
    "one-var": "warn",
    "no-void": "warn",
    "no-nested-ternary": "warn",
    "guard-for-in": "warn",
    "no-restricted-syntax": "warn",
    "no-cond-assign": "warn",
    "no-mixed-operators": "warn",
    "yoda": "warn",
    "no-multi-assign": "warn",
    "array-callback-return": 0,
    "operator-assignment": "warn",
    "prefer-rest-params": "warn",
    "comma-style": "warn",
    "wrap-iife": "warn",
    "quote-props": "warn",
    "object-property-newline": "warn",
    "no-proto": "warn",
    "lines-around-directive": "warn",
    "block-scoped-var": "warn",
    "no-multiple-empty-lines": "warn",
    "no-redeclare": "warn",
    "no-tabs": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "import/no-webpack-loader-syntax": "warn",
    "no-restricted-properties": "warn",
    "no-use-before-define": "warn",
    "no-bitwise": "warn",
    "no-irregular-whitespace": "warn",
    "import/no-mutable-exports": "warn",
    "newline-per-chained-call": "warn",
    "no-empty": "warn",
    "space-unary-ops": "warn",
    "no-unneeded-ternary": "warn",
    "no-case-declarations": "warn",
    "no-floating-decimal": "warn",
    "no-prototype-builtins": "warn",
    "no-useless-concat": "warn",
    "new-parens": "warn",
    "new-cap": "warn",
    "no-continue": "warn",
    "no-fallthrough": "warn",
    "prefer-spread": "warn",
    "no-self-compare": "warn",
    "valid-typeof": "warn",
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-labels": "warn",
    "no-label-var": "warn",
    "no-throw-literal": "warn",
    "use-isnan": "warn",
    "no-unreachable": "warn",
    "no-useless-return": "warn",
    "no-array-constructor": "warn",
    "no-whitespace-before-property": "warn",
    "no-spaced-func": "warn",
    "func-call-spacing": "warn",
    "array-bracket-spacing": "warn",
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
