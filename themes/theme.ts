import { extendTheme } from "@chakra-ui/react";

// var(--chakra-colors-monika-brand-light);
const colors = {
    "monika-primary": {
      200: "#B6F9C9",
      300: "#96E8BC",
      400: "#7DD181",
      500: "#4B7F52",
    },
    "monika-secondary": {
      50: "#fffbe6",
      75: "#ffee96",
      100: "#ffe76b",
      200: "#ffdc2b",
      500: "#ffd500",
      600: "#b39500",
      700: "#9c8200",
    },
    "monika-success": {
      50: "#f1f9e9",
      75: "#c4e7a3",
      100: "#abdd7d",
      200: "#87cf44",
      500: "#6ec51e",
      600: "#4d8a15",
      700: "#437812",
    },
    "monika-warning": {
      50: "#fff8ea",
      75: "#ffe2a7",
      100: "#ffd683",
      200: "#ffc44d",
      500: "#ffb829",
      600: "#b3811d",
      700: "#9c7019",
    },
    "monika-orange": {
      50: "#fff2ec",
      75: "#ffc8af",
      100: "#ffb28e",
      200: "#ff915d",
      500: "#ff7a3c",
      600: "#b3552a",
      700: "#9c4a25",
    },
    "monika-danger": {
      50: "#feedea",
      75: "#fcb7ab",
      100: "#fb9988",
      200: "#f96d54",
      500: "#f84f31",
      600: "#ae3722",
      700: "#97301e",
    },
    "monika-royal-blue": {
      50: "#ecf0fc",
      75: "#b1c2f3",
      100: "#91a8ee",
      200: "#6183e6",
      500: "#4169e1",
      600: "#2e4a9e",
      700: "#284089",
    },
    "monika-purple": {
      50: "#f3edfa",
      75: "#cdb6ea",
      100: "#b997e1",
      200: "#9b6ad5",
      500: "#864ccc",
      600: "#5e358f",
      700: "#522e7c",
    },
    "monika-neutral": {
      0: "#ffffff",
      10: "#fbfbfb",
      20: "#f6f6f7",
      30: "#eeeeee",
      40: "#e3e3e3",
      50: "#c9c9ca",
      60: "#bcbcbd",
      70: "#b1b2b3",
      80: "#a4a5a6",
      90: "#979899",
      100: "#8a8b8d",
      200: "#7d7e80",
      300: "#707173",
      400: "#656668",
      500: "#58595c",
      600: "#4d4f51",
      700: "#3e4042",
      800: "#313336",
      900: "#26282b",
    },
    "monika-background-light": {
      primary: "#F8F9FA",
      secondary: "#FFFFFF",
      third: "#EAF5FE",
      fourth: "#2A9EF4",
    },
    "monika-background-dark": {
      primary: "#26282B",
      secondary: "#3E4042",
      third: "#656668",
      fourth: "#FFFFFF",
    },
    "monika-text": {
      dark: "#212121",
      gray: "#3E3E3EB2",
      light: "#B1B2B3",
    },
  };

  const theme = extendTheme({
    colors,
    fonts: {
      heading: `'Outfit', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    styles: {
      global: () => ({
        body: {
          // backgroundColor: colors["monika-background"].light,
          backgroundColor: colors["monika-background-light"].primary,
          fontSize: {
            base: "12px",
            md: "14px",
          },
          // color: colors["monika-neutral"].dark,
          color: colors["monika-neutral"][900],
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          letterSpacing: "0.03em",
          px: "100px",
          py: 4,
          fontWeight: 500,
          transition:
            "background-color 400ms ease, border-color 400ms ease, transform 400ms ease",
        },
      },
      FormLabel: {
        baseStyle: {
          fontWeight: 600,
          fontSize: "14px",
        },
      },
    },
  });
  
  export default theme;