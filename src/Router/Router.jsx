import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";


const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};

export default RouterComponent;
