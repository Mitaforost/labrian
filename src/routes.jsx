import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookSearch from "./features/user/BookSearch";
import AdminDashboard from "./features/admin/AdminDashboard";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
);

export default AppRoutes;
