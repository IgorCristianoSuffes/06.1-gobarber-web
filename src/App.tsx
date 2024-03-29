import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';

import Routess from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
        <Routess />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
