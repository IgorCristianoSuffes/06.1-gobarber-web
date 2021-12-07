import React from "react";
import { Switch } from "react-router-dom";

import Routew from './Route';

import SignIn from '../pages/Signin/index';
import SignUp from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';

const Routess: React.FC = () => (
    <>
    <Switch>
        <Routew exact path="/"  component={SignIn} />
        <Routew exact path="/signup" component={SignUp} />

        <Routew exact path="/dashboard" component={Dashboard} />
    </Switch>
    </>
);

export default Routess;