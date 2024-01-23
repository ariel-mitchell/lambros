import Banner from "../components/Banner";
import AdminBootUser from "../components/admin/AdminBootUser";
import AdminCarTable from "../components/admin/AdminCarTable";
import React from 'react';
import Axios from "axios";

import { NavLink } from 'react-router-dom';

function Admin() {

    const handleClick = async (event) => {
        event.preventDefault();
        await Axios.post('http://localhost:8080/admin/clear').then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        });
    }

    return (
        <>
        <AdminBootUser/>
        <Banner/>
        <div style={{display:'flex', paddingTop:'50px', justifyContent:"space-evenly"}}>
            <NavLink to="/admin/add">
                <button className="btn btn-primary">Add Car to Database</button>
            </NavLink>
            <br/>
            <NavLink to="/admin/update">
                <button className="btn btn-primary">Update Car Info in Database</button>
            </NavLink>
            <br/>
            <NavLink to="/admin/hash">
                <button className="btn btn-primary">Generate Hash for New Admin</button>
            </NavLink>
            <button onClick={handleClick}>Clear Old Hashes</button>
        </div>
        <AdminCarTable/>
        </>
    )
}

export default Admin;