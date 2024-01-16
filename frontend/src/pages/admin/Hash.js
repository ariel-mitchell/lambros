import AdminGenHash from "../../components/admin/AdminGenHash";
import AdminUpdate from "../../components/admin/AdminUpdate";
import Banner from "../../components/Banner";

import { NavLink } from 'react-router-dom';

function Hash() {
    return (
        <>
        <Banner/>
        <NavLink to="/admin">
            <button>Back</button>
        </NavLink>
        <AdminGenHash/>
        </>
    )
}

export default Hash;