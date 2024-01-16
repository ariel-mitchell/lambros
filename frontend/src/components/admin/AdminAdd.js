import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminAdd(){
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [mileage, setMileage] = useState('');
    const [status, setStatus] = useState('');

    const handleMakeChange = (event) => {
        setMake(event.target.value);
    };

    const handleModelChange = (event) => {
        setModel(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleMileageChange = (event) => {
        setMileage(event.target.value);
    };

    const handleStatusChange = (event) => {
        if(event.target.value){
            setStatus("AVAILABLE");
        } else {
            setStatus("OUT OF SERVICE");
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
            await axios.post('http://localhost:8080/admin/add', {
                make: make,
                model: model,
                mileage: mileage,
                year: year,
                price: price,
                status: status
            })
            .then((response) => {
                console.log('Register successful:', response.data);
            })
            .catch((error) => console.error('Register failed:', error));
            
    };


    return(
    <div>
        <h1>New Car Entry</h1>
        <form onSubmit={handleSubmit}>
            <label>Make: <input type="text" id="make" value={make} onChange={handleMakeChange}/> </label><br/>
            <label>Model: <input type="text" id="model" value={model} onChange={handleModelChange}/> </label><br/>
            <label>Year: <input type="text" id="year" value={year} onChange={handleYearChange}/></label><br/>
            <label>Price: <input type="text" id="price" value={price} onChange={handlePriceChange}/></label><br/>
            <label>Mileage: <input type="text" id="make" value={mileage} onChange={handleMileageChange}/></label><br/>
            <label>Ready to rent?: <input type="checkbox" id="status" value={status} onChange={handleStatusChange}/></label><br/>
            <input type="submit"/>
        </form>
    </div>);
}

export default AdminAdd;