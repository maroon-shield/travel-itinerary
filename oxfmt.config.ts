import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 80,
  singleQuote: false,

  sortImports: {
    newlinesBetween: false,
    sortSideEffects: true,
  },

  sortTailwindcss: true,
});
