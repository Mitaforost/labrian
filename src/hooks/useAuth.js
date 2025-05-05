import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
        setLoading(false);
    }, []);

    return { isAuthenticated, loading, setIsAuthenticated };
};

export default useAuth;
