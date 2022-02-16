import { extendTheme } from '@chakra-ui/react';

const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
  } 

  export const customTheme = extendTheme({ config })
