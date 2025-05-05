import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import BookSearch from './features/user/BookSearch';
import AdminDashboard from './features/admin/AdminDashboard';
import useAuth from './hooks/useAuth';

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {!hideHeaderFooter && <Header />}
            <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<BookSearch />} />
                <Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" replace />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </div>
    );
};

const App = () => {
    const { isAuthenticated, loading, setIsAuthenticated } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <AppContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </Router>
    );
};

export default App;
