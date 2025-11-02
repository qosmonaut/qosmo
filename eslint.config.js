import { defineConfig, globalIgnores } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tailwind from "eslint-plugin-tailwindcss"
import globals from 'globals'
 
const eslintConfig = defineConfig([
  // Tailwind CSS flat config preset must be spread at the top level, not in rules block
  ...tailwind.configs['flat/recommended'],
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: {
      'react': reactPlugin,
      'react-hooks': hooksPlugin,
      '@next/next': nextPlugin,
      'tailwindcss': tailwind,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      next: {
        rootDir: '.',
      },
      tailwindcss: {
        // Tailwind v4: no tailwind.config.js; disable config resolution
        // The plugin will read tokens from the CSS files (e.g., app/globals.css)
        config: false,
        cssFiles: [
          'app/globals.css',
        ],
      },
    },
  },

  // Default ignores of eslint-config-next
  globalIgnores([
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
  ]),
])
 
export default eslintConfig