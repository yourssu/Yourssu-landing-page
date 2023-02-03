module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "prettier",
    "@typescript-eslint"
  ],
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": true, "optionalDependencies": false, "peerDependencies": false }
    ],
    "import/no-unresolved": "error",
    "consistent-return": [0],
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx", ".tsx"] }],
    "import/prefer-default-export": "off",
    "react/require-default-props": "off"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": "."
      }
    },
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": [
    "gatsby-config.ts"
  ]
}