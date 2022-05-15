import { extendTheme } from '@chakra-ui/react';
import '@fontsource/caveat';

const theme = extendTheme({
  colors: {
    primary: '#9F7AEA',
    secondary: '#2F855A',
  },
  fonts: {
    heading: 'Caveat',
  },
  shadows: {
    base: '2px 2px 0 #000',
    sm: '4px 4px 0 #000',
    md: '8px 8px 0 #000',
    lg: '12px 12px 0 #000',
  },
  borders: {
    base: '2px solid',
    sm: '4px solid',
    md: '6px solid',
  },
});

export default theme;
