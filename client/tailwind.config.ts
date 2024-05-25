import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "aol-blue": "#000F76",
                "aol-light-gray": "#F0F0F0",
                "aol-gray": "#BFBFBF",
                "aol-dark-gray": "#929292",
                "aol-text-blue": "#002EFF",
                "aol-text-red": "#FA0402",
            },
        },
        fontFamily: {
            serif: ["ui-serif", "Times New Roman", "serif"],
        },
    },
    plugins: [],
};
export default config;
