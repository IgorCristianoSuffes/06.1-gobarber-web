import React from "react";
import { RouteProps, Route as ReactDOMRoute, Redirect } from "react-router-dom";
import { useAuth } from '../hooks/auth';

interface RoutePropsInterface extends RouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Routess: React.FC<RoutePropsInterface> = ({ isPrivate = false, component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <ReactDOMRoute
            { ...rest }
            render={({ location }) => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname:isPrivate ?  '/': '/dashboard',
                            state: {from: location },
                        }}
                    />
                )
            }}
        
        />
    );
};

export default Routess;