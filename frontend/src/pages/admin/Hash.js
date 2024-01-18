import AdminGenHash from "../../components/admin/AdminGenHash";
import Banner from "../../components/Banner";
import AdminBootUser from "../../components/admin/AdminBootUser";

import { NavLink } from 'react-router-dom';

function Hash() {
    return (
        <>
        <AdminBootUser/>
        <Banner/>
        <NavLink to="/admin">
            <button>Back</button>
        </NavLink>
        <AdminGenHash/>
        </>
    )
}

export default Hash;