import '@fontsource/diphylleia';
import '@fontsource/lora';
import '@fontsource/amita';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `"Diphylleia", serif`,
    body: `"lora", serif`,
  },
});

export default theme;
