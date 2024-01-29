/** @type {import('tailwindcss').Config} */
import * as tailwindcssAnimate from "tailwindcss-animate"

export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                neutral: "#1F292E",
                neon: "#f7e13b",
                background: "#030711",
                foreground: "#EEEEEE"
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "background": {
                    "0%": { transform: "translate(0,0)" },
                    "10%": { transform: "translate(-5%,-5%)" },
                    "20%": { transform: "translate(-10%,5%)" },
                    "30%": { transform: "translate(5%,-10%)" },
                    "40%": { transform: "translate(-5%,15%)" },
                    "50%": { transform: "translate(-10%,5%)" },
                    "60%": { transform: "translate(15%,0)" },
                    "70%": { transform: "translate(0,10%)" },
                    "80%": { transform: "translate(-15%,0)" },
                    "90%": { transform: "translate(10%,5%)" },
                    "100%": { transform: "translate(5%,0)" }
                },
                "blink": {
                    "0%": {
                        opacity: 0
                    },
                    "15%": {
                        opacity: 0
                    },
                    "15.5%": {
                        opacity: 0.5
                    },
                    "16.5%": {
                        opacity: 0.5
                    },
                    "17%": {
                        opacity: 0.75
                    },
                    "17.5%": {
                        opacity: 0
                    },
                    "48%": {
                        opacity: 0
                    },
                    "48.5%": {
                        opacity: 0.5
                    },
                    "49%": {
                        opacity: 1
                    },
                    "50%": {
                        opacity: 1
                    },
                    "50.5%": {
                        opacity: 0.5
                    },
                    "51%": {
                        opacity: 0
                    },
                    "55%": {
                        opacity: 0
                    },
                    "56%": {
                        opacity: .75
                    },
                    "57%": {
                        opacity: 0
                    },
                    "60%": {
                        opacity: 1
                    },
                    "85%": {
                        opacity: 1
                    },
                    "86%": {
                        opacity: 0
                    },
                    "87%": {
                        opacity: 0.60
                    },
                    "88%": {
                        opacity: 0.60
                    },
                    "89%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 0
                    }
                },
                "loader": {
                    "0%": {
                        top: "32px",
                        left: "32px",
                        width: "0",
                        height: "0",
                        opacity: "0"
                    },
                    "4.9%": {
                        top: "32px",
                        left: "32px",
                        width: "0",
                        height: "0",
                        opacity: "0"
                    },
                    "5%": {
                        top: "32px",
                        left: "32px",
                        width: "0",
                        height: "0",
                        opacity: "1"
                    },
                    "100%": {
                        top: "0px",
                        left: "0px",
                        width: "64px",
                        height: "64px",
                        opacity: "0"
                    },
                },
                "fadeIn": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" }
                },
                "fadeOut": {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "background": "background .2s infinite",
                "blink": "blink 4s infinite alternate",
                "loading": 'loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
                "fadeIn": 'fadeIn 250ms ease-in',
                "fadeOut": 'fadeOut 250ms ease-in forwards',
            },
            dropShadow: {
                "neon": [
                    "0 0 2px",
                    "0 0 1em #EBD31455",
                    "0 0 0.5em #EBD31455",
                    "0 0 0.1em #EBD31455",
                    "0 10px 3px #000"
                ]
            },
            fontFamily: {
                lekton: ['Lekton'],
            },
        }
    },
    plugins: [tailwindcssAnimate],
}
