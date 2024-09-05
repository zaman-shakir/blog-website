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
  }
];
