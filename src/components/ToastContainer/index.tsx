import React from "react";
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from "./styles";

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    const messagesWithTransitions = useTransition(
        messages,
        {
            keys: message => message.id,
            from: { right: '-120%' },
            enter: { right: '0%' },
            leave: { right: '-120%' },
        },
    );

    //05:40 animando Toast

    return (
        <Container>
            { messages.map((message) => (
                <Toast 
                key={message.id}
                //style={props}
                message={message}  
                />
            )) }
        </Container>
    );
};

export default ToastContainer