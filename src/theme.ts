require("typeface-muli")
require("typeface-archivo")
require("typeface-teko")

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

export const fonts = {
  muli: "Muli, sans-serif",
  archivo: "Archivo, sans-serif",
  teko: "Teko, sans-serif",
}

export const themes = {
  light: {
    background: "white",
    cardBackground: "white",
    cardBackgroundHover: "linear-gradient(145deg, #e6e6e6, #ffffff)",
    cardShadowFlat: "20px 20px 60px #bfbfbf, -20px -20px 60px #ffffff",
    cardShadowPressed:
      "inset 20px 20px 60px #bfbfbf, inset -20px -20px 60px #ffffff",
    iconShadowFlat: "5px 5px 12px #bfbfbf, -5px -5px 12px  #ffffff",
    iconShadowPressed:
      "inset 5px 5px 12px #bfbfbf, inset -5px -5px 12px #ffffff",
    buttonBackground: "#5E81AC",
    textColor: "black",
    linkColor: "#9a9a9a",
    linkColorHover: "#333",
    buttonColor: "#ECEFF4",
    inverted: "invert(0%)",
  },
  dark: {
    background: "#474747",
    cardBackground: "#474747",
    cardBackgroundHover: "linear-gradient(145deg, #404040, #4c4c4c)",
    cardShadowFlat: "20px 20px 60px #3c3c3c, -20px -20px 60px #525252",
    cardShadowPressed:
      "inset 20px 20px 60px #3c3c3c, inset -20px -20px 60px #525252",
    iconShadowFlat: "5px 5px 12px #353535, -5px -5px 12px #595959",
    iconShadowPressed:
      "inset 5px 5px 12px #353535, inset -5px -5px 12px #595959",
    buttonBackground: "#5E81AC",
    textColor: "white",
    linkColor: "#e6e6e6",
    linkColorHover: "white",
    buttonColor: "#ECEFF4",
    inverted: "invert(100%)",
  },
}
