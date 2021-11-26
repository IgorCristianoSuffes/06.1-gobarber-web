import React, { createContext, useContext, useCallback } from "react";

import ToastContainer from '../components/ToastContainer/index';

interface ToastContextData {
    addToast(): void;
    removeToast(): void;
}

export const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({children}) => {

    const addToast = useCallback(() => {
        console.log('addToast');
    }, []);

    const removeToast = useCallback(() => {

    }, []);

    return (
       <ToastContext.Provider value={{ addToast, removeToast }}>
           { children }
           <ToastContainer />
       </ToastContext.Provider>
    );
}

export function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be usde within a ToastProvider');
    }

    return context;
}