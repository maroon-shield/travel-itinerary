import { defineConfig } from "oxlint";

export default defineConfig({
  env: {
    browser: true,
    es2026: true,
  },

  plugins: ["react", "typescript", "unicorn", "import", "oxc"],

  categories: {
    correctness: "warn",
  },

  rules: {
    eqeqeq: "warn",
    "object-shorthand": "warn",
    "typescript/consistent-type-imports": "warn",
    "react/jsx-no-useless-fragment": "warn",
  },

  ignorePatterns: ["dist/**", "node_modules/**"],
});
