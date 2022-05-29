module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": "warn",
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "warn",
    "object-curly-newline": "off",
    "prettier/prettier": [
      "error",
      {
        tailingComma: "all",
        semi: true,
        bracketSpacing: true,
        singleQuote: false,
      },
    ],
    indent: [2, 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
