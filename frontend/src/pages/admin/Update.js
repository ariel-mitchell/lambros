import AdminUpdate from "../../components/admin/AdminUpdate";
import Banner from "../../components/Banner";
import AdminBootUser from "../../components/admin/AdminBootUser";

import { NavLink } from 'react-router-dom';

function Update() {
    return (
        <>
        <AdminBootUser/>
        <Banner/>
        <NavLink to="/admin">
            <button>Back</button>
        </NavLink>
        <AdminUpdate/>
        </>
    )
}

export default Update;