import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import ToastContainer from '../components/ToastContainer/index';

const AppProvider: React.FC = ({ children }) => (
    <AuthProvider>
        <ToastProvider>
            { children }
            <ToastContainer></ToastContainer>
        </ToastProvider>
    </AuthProvider>
);

export default AppProvider;