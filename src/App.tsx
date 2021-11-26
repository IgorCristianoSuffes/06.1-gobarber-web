import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin/index';
import SignUp from './pages/Signup/index';
import ToastContainer from './components/ToastContainer/index';
// 09:10

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </ AuthProvider>

    <ToastContainer />
    
    <GlobalStyle />
  </>
);

export default App;
