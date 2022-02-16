import { ColorModeScript } from '@chakra-ui/react';
import { customTheme } from './customTheme';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
