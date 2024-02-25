/** @type {import('prettier').Config} */

module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "^(next-auth/(.*)$)|^(next-auth$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/env(.*)$",
    "^@/server/(.*)$",
    "^@/config/(.*)$",
    "^@/types/(.*)$",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/layouts/(.*)$",
    "^@/hooks/(.*)$",
    "^@/store/(.*)$",
    "^@/utils/(.*)$",
    "^@/assets/(.*)$",
    "^@/styles/(.*)$",
    "",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
};