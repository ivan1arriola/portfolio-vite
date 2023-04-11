const theme = {
  light: {
    colors: {
      primary: "#3B82F6",
      secondary: "#60A5FA",
      background: "#FFFFFF",
      pageBackground: "#F0F4F8",
      text: "#374151",
      link: { color: "#3B82F6", hover: "#60A5FA" },
      card: { background: "#FFFFFF", text: "#374151", border: "#D1D5DB" },
      navbar: { background: "#FFFFFF", text: "#374151", border: "#D1D5DB" },
      offcanvas: { background: "#FFFFFF", text: "#374151", headerBackground: "#F0F4F8", headerText: "#374151" },
    },
    shadows: {
      box: "0 0 10px rgba(0, 0, 0, 0.1)"
    },
    filters: {
      image: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
      logo: "invert(1)"
    },
    fonts: {
      primary: "'Open Sans', sans-serif"
    }
  },
  dark: {
    colors: {
      primary: "#3B82F6",
      secondary: "#60A5FA",
      background: "#1F2937",
      pageBackground: "#111827",
      text: "#F5F5F5",
      link: { color: "#3B82F6", hover: "#60A5FA" },
      card: { background: "#374151", text: "#F5F5F5", border: "#4B5563" },
      navbar: { background: "#1F2937", text: "#F5F5F5", border: "#4B5563" },
      offcanvas: { background: "#1F2937", text: "#F5F5F5", border: "#4B5563" }
    },
    shadows: {
      box: "0 0 0px rgba(255, 255, 255, 0.5)"
    },
    filters: {
      image: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
      logo: "invert(0)"
    },
    fonts: {
      primary: "'Alegreya', sans-serif"
    }
  }
};
export default theme;