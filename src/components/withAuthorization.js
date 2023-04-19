import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const withAuthorization = (WrappedComponent, allowedRoles) => {
    const WithAuthorization = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const decoded = jwtDecode(token);

                if (!allowedRoles.includes(decoded.role)) {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error decoding token:', error);
                navigate('/login');
            }
        }, [allowedRoles, navigate]);

        return <WrappedComponent {...props} />;
    };

    return WithAuthorization;
};

export default withAuthorization;