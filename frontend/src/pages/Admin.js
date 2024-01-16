import Banner from "../components/Banner";
import AdminAdd from "../components/admin/AdminAdd";
import AdminGenHash from "../components/admin/AdminGenHash";
import AdminUpdate from "../components/admin/AdminUpdate";
import AdminCarTable from "../components/admin/AdminCarTable";

import { NavLink } from 'react-router-dom';

function Admin() {
    return (
        <>
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