import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notfound";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/not-found" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate replace to="/not-found" />} />
                </Routes>
            </BrowserRouter>
        );
    }
}