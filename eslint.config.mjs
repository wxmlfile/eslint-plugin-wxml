import js from "@eslint/js";

export default [
    {
        ...js.configs.recommended,
        files: ["lib/**/*.js"],
        ignores: ["website/**", "tools/**"]
    },
    {
        languageOptions: {
            globals: {
                module: "readonly",
                require: "readonly",
            }
        }
    }
];