import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const eslintConfig = [
  // 1. Étendre les configurations standard de Next.js (Core Web Vitals)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 2. Intégrer Prettier pour éviter les conflits de formatage
  ...compat.extends("plugin:prettier/recommended"),

  // 3. Vos règles personnalisées de Senior
  {
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "react/no-unescaped-entities": "off"
    }
  }
];

export default eslintConfig;
