import AdminAdd from "../../components/admin/AdminAdd";
import Banner from "../../components/Banner";

import { NavLink } from 'react-router-dom';

function Add() {
    return (
        <>
        <Banner/>
        <NavLink to="/admin">
            <button>Back</button>
        </NavLink>
        <AdminAdd/>
        </>
    )
}

export default Add;