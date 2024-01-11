import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const User = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate(); // Hook to access the history instance

    useEffect(() => {
        setUsername(localStorage.getItem('username'));
    }, []);

    const handleLogout = () => {
        axios.post('http://localhost:8080/api/user/logout')
        .then(response => {
            console.log('Logout successful:', response.data);
            localStorage.removeItem('username');
            setUsername('');
            navigate('/login');
        }).catch(error => {
            console.error('Logout failed:', error);
        });
    };

    const flexContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#203850',
        paddingRight: '35px',
        cursor: 'pointer',
        textDecoration: 'none' // Removes underline from NavLink
    };

    return (
        <>
            {username ? (
                <div style={flexContainerStyle} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faCircleUser} style={{width: '45px', height: 'auto'}} />
                    <p>Logout</p>
                </div>
            ) : (
                <NavLink to="/login" style={flexContainerStyle}>
                    <FontAwesomeIcon icon={faCircleUser} style={{width: '45px', height: 'auto'}} />
                    <p>Login</p>
                </NavLink>
            )}
        </>
    );
}

export default User;