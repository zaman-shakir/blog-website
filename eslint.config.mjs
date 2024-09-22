import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],  // Specify files to lint
    languageOptions: {
      globals: globals.browser,  // Specify browser globals
    },
    ...pluginJs.configs.recommended,  // Apply recommended JavaScript rules
    ...pluginReact.configs.flat.recommended,  // Apply recommended React rules
    settings: {
      react: {
        version: "detect",  // Automatically detect the version of React to use
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",  // Disable 'React must be in scope' for new JSX transform
      "react/jsx-uses-react": "error",    // Prevent 'unused React' errors with JSX
      "react/jsx-uses-vars": "error",     // Prevent 'unused variable' errors with JSX
    },
  },
];
