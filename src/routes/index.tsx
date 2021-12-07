import React from "react";
import { Switch } from "react-router-dom";

import Routew from './Route';

import SignIn from '../pages/Signin/index';
import SignUp from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';

const Routess: React.FC = () => (
    <>
    <Switch>
        <Routew path="/" exact component={SignIn} />
        <Routew path="/signup" component={SignUp} />

        <Routew path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
    </>
);

export default Routess;