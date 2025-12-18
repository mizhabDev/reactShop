export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "triangle-spin": "triangle-spin 1.5s linear infinite",
      },
      keyframes: {
        "triangle-spin": {
          "0%": { "stroke-dasharray": "45, 32.5", "stroke-dashoffset": "0" },
          "100%": {
            "stroke-dasharray": "45, 32.5",
            "stroke-dashoffset": "-232.6",
          },
        },
      },
    },
  },
  plugins: [],
};
