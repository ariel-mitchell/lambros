import AdminAdd from "../../components/admin/AdminAdd";
import Banner from "../../components/Banner";
import AdminBootUser from "../../components/admin/AdminBootUser";

import { NavLink } from 'react-router-dom';

function Add() {
    return (
        <>
        <AdminBootUser/>
        <Banner/>
        <NavLink to="/admin">
            <button>Back</button>
        </NavLink>
        <AdminAdd/>
        </>
    )
}

export default Add;