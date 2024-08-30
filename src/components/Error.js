import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

const Error = ({ message }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="error">
            <h1>Error</h1>
            <p>{message}</p>
            <button onClick={handleGoBack}>Go Back to Home</button>
        </div>
    );
};

export default Error;
