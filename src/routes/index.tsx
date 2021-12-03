import React from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from '../pages/Signin/index';
import SignUp from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';

const Routess: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
);

export default Routess;