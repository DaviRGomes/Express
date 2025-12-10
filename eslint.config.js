import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      // 🚨 Mude para Node ou combine Node com Browser
      // Se for um projeto Express puro (backend):
      globals: globals.node,
      // Se for um projeto Node.js + Browser (código universal):
      // globals: { ...globals.node, ...globals.browser }
    }
  },
]);