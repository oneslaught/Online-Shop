import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommenden from "eslint-plugin-prettier/recommended";
import eslintUnusedImports from "eslint-plugin-unused-imports";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginDeprecation from "eslint-plugin-deprecation";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default [
  {
    plugins: {
      prettier: eslintPluginPrettier,
      deprecation: eslintPluginDeprecation,
      perfectionist: eslintPluginPerfectionist,
      import: eslintPluginImport,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "unused-imports": eslintUnusedImports,
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
  eslintPluginPrettierRecommenden,
];
