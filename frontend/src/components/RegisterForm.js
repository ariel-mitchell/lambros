import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [email, setEmail] = useState('');
    const [adminChecked, setAdminChecked] = useState('hidden');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleVerifyPasswordChange = (event) => {
        setVerifyPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleAdminChecked = (event) => {
        if(adminChecked=="visible"){
            setAdminChecked("hidden");
        }else{
            setAdminChecked("visible");
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== verifyPassword) {
            console.error('Passwords do not match');
            alert('Passwords do not match')
            return;
        }
            await axios.post('http://localhost:8080/api/user/register', {
                username: username, 
                password: password, 
                verifyPassword: verifyPassword, 
                email: email 
            })
            .then((response) => {
                console.log('Register successful:', response.data);
                navigate("/home");
                localStorage.setItem('username', username);
            })
            .catch((error) => console.error('Register failed:', error));
            
    };

    return (
        <div className='container'  style={{width:'410px'}}>

        <form  onSubmit={handleSubmit}>
            <fieldset className='fieldset'>
                <legend className='legend-two'>Register</legend>
                <div className="form-group">
                    <label>
                        Username:
                        <input type='text' id='username' name='username' placeholder='username' className='form-control' value={username} onChange={handleUsernameChange} autoComplete="on" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Password:
                        <input type='password' id='password' name='password'  placeholder='password' className='form-control' value={password} onChange={handlePasswordChange} autoComplete="on" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Verify Password:
                        <input type='password' id='verifyPassword' name='verifyPassword' placeholder='password' className='form-control' value={verifyPassword} onChange={handleVerifyPasswordChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                        <input type='email' id='email' name='email' placeholder='email' className='form-control' value={email} onChange={handleEmailChange} autoComplete="on" />
                    </label>
                </div>
                <div>
                    <label>
                        Register as Admin:&nbsp;&nbsp;
                        <input type='checkbox' name="admin" value={adminChecked} onClick={handleAdminChecked}/>
                    </label>
                </div>
                <div style={{visibility:adminChecked}}>
                    <label>
                        Enter your Admin Security Code:
                        <input type='password'/>
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit" className='btn btn-primary' style={{float:'right'}}>Register</button>
                </div>
            </fieldset>
        </form>
        </div>
    );
}

export default RegisterForm;