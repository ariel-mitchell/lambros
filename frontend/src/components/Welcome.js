import React, { useState, useEffect } from 'react';

const Welcome = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const welcomeStyle = {
        textAlign: 'center',
        padding: '30px',
        fontFamily: "'Brush Script MT', cursive"
    };

    return (
        <>
            {username ? (<h2 style={welcomeStyle}>Welcome, {username}!</h2>) : null}
        </>
    );
}

export default Welcome;