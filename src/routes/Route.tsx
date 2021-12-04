import React from "react";
import { RoutesProps, Route as ReactDOMRoute, Navigate } from "react-router-dom";
import { useAuth } from '../hooks/auth';

interface RoutePropsInterface extends RoutesProps {
    isPrivate?: boolean;
    path:string;
    component: React.ComponentType;
    element: JSX.Element;
}

const Routess: React.FC<RoutePropsInterface> = ({ isPrivate = false, component: Component,  ...rest }) => {
    const { user } = useAuth();

    return (
        <ReactDOMRoute
            {...rest}
            children={() => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Navigate to={{ pathname:isPrivate ?  '/': '/dashboard'}} />
                )
            }}
        
        />
    );
};

export default Routess;