import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn", // variabel tidak terpakai = warning
            "no-console": "warn", // console.log = warning
            eqeqeq: "error", // wajib pakai === bukan ==
        },
    },
];
