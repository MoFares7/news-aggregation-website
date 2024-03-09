import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./feature/home/pages/home_page";
import ElectronicNewsPages from "./feature/various/pages/various_news";
import EducationsPage from "./feature/education/pages/education_page";

const AppRoutes = () => (
        <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/elec-news" element={<ElectronicNewsPages />} />
                <Route path="/edu-news" element={<EducationsPage />} />
        </Routes>
);

export default AppRoutes;
