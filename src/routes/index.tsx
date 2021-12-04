import React from "react";
import { Routes } from "react-router-dom";

import Route from './Route';

import SignIn from '../pages/Signin/index';
import SignUp from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';

const Routess: React.FC = () => (
    <>
    <Routes>
        <Route path="/" component={Dashboard} element={<SignIn />} />
        <Route path="/signup" component={Dashboard} element={<SignUp />} />

        <Route path="/dashboard" component={Dashboard} element={<Dashboard />} />
    </Routes>
    </>
);

export default Routess;