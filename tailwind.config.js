module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                svgpath: {
                    "0%": { "stroke-dashoffset": "155" },
                    "100%": { "stroke-dashoffset": "0" },
                },
            },

            animation: {
              svgpath: 'svgpath dash 5s linear alternate infinite;'
            },
        },
    },
    variants: {
        extend: {
            translate: ["active", "group-hover"],
        },
    },
    plugins: [],
};
