import Banner from "../components/Banner";
import AdminBootUser from "../components/admin/AdminBootUser";
import AdminCarTable from "../components/admin/AdminCarTable";

import { NavLink } from 'react-router-dom';

function Admin() {
    return (
        <>
        <AdminBootUser/>
        <Banner/>
        <NavLink to="/admin/add">
            <button>Add Car to Database</button>
        </NavLink>
        <br/>
        <NavLink to="/admin/update">
            <button>Update Car Info in Database</button>
        </NavLink>
        <br/>
        <NavLink to="/admin/hash">
            <button>Generate Hash for New Admin</button>
        </NavLink>
        <AdminCarTable/>
        </>
    )
}

export default Admin;