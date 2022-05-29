import { extendTheme } from "@chakra-ui/react";
import "@fontsource/caveat";
import "@fontsource/roboto-mono";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        default: "purple.400",
        _dark: "purple.600",
      },
      secondary: {
        default: "green.600",
        _dark: "green.700",
      },
    },
  },
  fonts: {
    body: "Roboto Mono",
    heading: "Caveat",
  },
  shadows: {
    base: "2px 2px 0 #000",
    sm: "4px 4px 0 #000",
    md: "8px 8px 0 #000",
    lg: "12px 12px 0 #000",
  },
  borders: {
    base: "2px solid",
    sm: "4px solid",
    md: "6px solid",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "yellow.50" : "gray.800",
      },
    }),
  },
});

export default theme;
