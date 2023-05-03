import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import SchoolLifePage from "./pages/schoollife";
import AboutPage from "./pages/about";
import EventsPage from "./pages/events";
import NewsPage from "./pages/news";
import DonationPage from "./pages/donation";
import SearchPage from "./pages/search";
import TuitionFinAidPage from "./pages/tuitionAndFinAid";
import CareersPage from "./pages/careers";
import AcademicsPage from "./pages/academics";
import AdmissionsPage from "./pages/admissions";
import NotFoundPage from "./pages/notfound";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/academics" element={<AcademicsPage />} />
                    <Route path="/admissions" element={<AdmissionsPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/tuition-and-financial-aid" element={<TuitionFinAidPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/donation" element={<DonationPage />} />
                    <Route path="/school-life" element={<SchoolLifePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/not-found" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate replace to="/not-found" />} />
                </Routes>
            </BrowserRouter>
        );
    }
}