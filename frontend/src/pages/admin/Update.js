import AdminUpdate from "../../components/admin/AdminUpdate";
import Banner from "../../components/Banner";

import { NavLink } from 'react-router-dom';

function Update() {
    return (
        <>
        <Banner/>
        <NavLink to="/admin">
            <button>Back</button>
        </NavLink>
        <AdminUpdate/>
        </>
    )
}

export default Update;