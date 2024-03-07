import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./feature/home/pages/home_page";
import ElectronicNews from "./feature/electronic/pages/electronic_news";

const AppRoutes = () => (
        <Routes>
             
                <Route path="/" element={<HomePage />} />
                <Route path="/elec-news" element={<ElectronicNews />} />
        </Routes>
);

export default AppRoutes;
