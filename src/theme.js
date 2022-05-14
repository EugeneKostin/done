import { extendTheme } from '@chakra-ui/react';
import '@fontsource/caveat';

const theme = extendTheme({
  fonts: {
    heading: 'Caveat',
  },
  shadows: {
    base: '4px 4px 0 #000',
    md: '8px 8px 0 #000',
    lg: '12px 12px 0 #000',
  },
});

export default theme;
