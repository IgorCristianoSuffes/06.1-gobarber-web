import React from "react";
import { RouteProps, Route } from "react-router-dom";
import { useAuth } from '../hooks/auth';

interface RoutePropsInterface extends RouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Routess: React.FC<RoutePropsInterface> = ({ isPrivate = false, ...rest, component: Component }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={() => {
                return isPrivate === isSigned ? (
                    <Component />
                )
            }}
        
        />
    );
};

export default Routess;