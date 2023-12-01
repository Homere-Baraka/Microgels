/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    backgroundImage: {
      'back1': "url('/src/images/server-bro-png')",
      'footer-texture': "url('/img/footer-texture.png')",
      'linear': "linear-grandient (#8e86b5, #acaeed)",
    },
    screens: {
      sm: "481px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {  
      black: "#363636",
      bleu: "#2b73b3",
      bleu_f: "#42687c",
      bleu_ray: "#1f2039",
      reds: "#e8362c",
      blanc: "#f6e8ea",
      gray2: "#434a54",
      color_text: "#a5b4fc",
    },
    
    extend: {
    },
  },
  plugins: [],
}

