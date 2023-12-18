import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from '../components/Banner';
import LoginForm from '../components/LoginForm';

function login() {
    return (
        <>
            <Banner/>
            <LoginForm/>  
        </>
    )
}