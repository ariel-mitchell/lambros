import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function AdminGenHash(){
    
    const [email, setEmail] = useState('');
    const [hashVal, setHash] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        setHash(uuidv4());
        //axiosSubmit();
    }

    const axiosSubmit = async (event) => {
        event.preventDefault();
            await axios.post('http://localhost:8080/admin/hash', {
                hashVal: hashVal,
                email: email 
            })
            .then((response) => {
                // console.log('Register successful:', response.data);
                // navigate("/home");
                // localStorage.setItem('username', username);
            })
            // .catch((error) => console.error('Register failed:', error));
            
    };


    return(<div>
        <h1>Generate Admin Hash</h1>
                <div className="form-group">
                    <label>
                        New User Email:
                        <input type='email' id='email' name='email' placeholder='email' className='form-control' value={email} onChange={handleEmailChange} autoComplete="on" />
                    </label>
                </div>
                <br />
                <div>
                    <button onClick={handleSubmit}>Generate</button>
                </div>
            <br/>
            <p>Admin Security Code will appear here:</p>
            <p>{hashVal}</p>
    </div>);
}

export default AdminGenHash;