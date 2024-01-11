import React, { useState } from 'react';
import '../App.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
            await axios.post('http://localhost:8080/api/user/login', {
                username: username, 
                password: password
            })
            .then((response) => {console.log(response);})
            .catch((error) => console.error(error));
            


    };

    return (
        <div className='container'  style={{width:'500px'}}>

        <form  onSubmit={handleSubmit}>
            <fieldset className='fieldset'>
                <legend className='legend'>Login</legend>
                <div className="form-group">
                    <label>
                        Username:
                        <input type='text' placeholder='username' className='form-control' value={username} onChange={handleUsernameChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Password:
                        <input type='password'  placeholder='password' className='form-control' value={password} onChange={handlePasswordChange} />
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit" className='btn btn-primary'>Login</button>
                    <NavLink to="/Register" style={{float:'right', textDecoration:'none', transform:'translateY(10px)'}}>Register</NavLink>
                </div>
            </fieldset>
        </form>
        </div>
    );
}

export default LoginForm;
