module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
    "prefer-arrow",
    "prefer-arrow-functions",
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    "prefer-arrow-functions/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "_",
        ignoreRestSiblings: false,
        varsIgnorePattern: "_",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelAttributes: ["label"],
        controlComponents: ["CheckBoxBase"],
        depth: 3,
      },
    ],
    "dot-notation": [
      2,
      {
        allowKeywords: true,
        allowPattern: "^[a-z]+(_[a-z]+)+$",
      },
    ],
    "no-cond-assign": ["error"],
    "no-constant-condition": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-empty": ["error"],
    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          ":": "before",
        },
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.*", "**/.storybook/**/*.*"],
        peerDependencies: true,
      },
    ],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".ts", ".d.ts", ".tsx"],
      },
    },
  },
};
