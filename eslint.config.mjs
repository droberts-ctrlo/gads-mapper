import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";

export default defineConfig([
    { ignores: [ "eslint.config.mjs", "**/dist/**", "**/node_modules/**", "babel.config.js", "jest.config.js", "tsconfig.json", "**/*.test.*"] },
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: { ...globals.browser, ...globals.jquery } } },
    tseslint.configs.recommended,
    { plugins: {'@stylistic': stylistic, jsdoc} },
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            'react/prop-types': 'off',
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/curly-newline': 'error',
            '@stylistic/indent': ['error', 4],
            '@stylistic/comma-dangle': ['error', 'never'],
            "jsdoc/require-jsdoc": [
                "error",
                {
                    require: {
                        FunctionDeclaration: true,
                        MethodDefinition: true,
                        ClassDeclaration: true,
                        ArrowFunctionExpression: false,
                        FunctionExpression: false
                    }
                }
            ],
        }
    }
]);
