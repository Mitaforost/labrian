import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/${endpoint}`);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Ошибка HTTP ${response.status}: ${errorText}`);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error(`Ожидался JSON, но получен ${contentType}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;
