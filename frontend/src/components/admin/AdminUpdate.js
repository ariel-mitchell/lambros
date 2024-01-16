import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminUpdate(){
    const [mileage, setMileage] = useState('');
    const [status, setStatus] = useState('');
    const [id, setId] = useState('');

    const handleMileageChange = (event) => {
        setMileage(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
            await axios.post('http://localhost:8080/admin/update', {
                id : id,
                mileage: mileage,
                status: status
            })
            .then((response) => {
                console.log('Register successful:', response.data);
            })
            .catch((error) => console.error('Register failed:', error));
            
    };

    //update car form
    return(
    <div>
        <h1>Edit Car Entry</h1>
        <form onSubmit={handleSubmit}>
            <label>ID of car to change?: <input type="text" id="make" value={id} onChange={handleIdChange}/></label><br/>
            {/* mileage is broken for some reason, don't know why */}
            <label>Mileage: <input type="text" id="make" value={mileage} onChange={handleMileageChange}/></label><br/>
            <p>Status:</p>
            <label>Available <input type="radio" id="available" value="AVAILABLE" onChange={handleStatusChange}/></label><br/>
            <label>Rented <input type="radio" id="rented" value="RENTED" onChange={handleStatusChange}/></label><br/>
            <label>Out of Service <input type="radio" id="outofservice" value="OUT OF SERVICE" onChange={handleStatusChange}/></label><br/>
            {/* service report not yet implemented in MVP */}
            <label>If Out of Service, please write a reason:<input type="text" id="servicereport"/></label><br/>
            <input type="submit"/>
        </form>
    </div>);
}

export default AdminUpdate;