import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
            .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
            })
            .then(data => {
            setData(data);
            setLoading(false);
            })
            .catch(error => {
            setError(error.message);
            setLoading(false);
            });
        }, 1000);
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
