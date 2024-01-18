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
        </div>
        <AdminCarTable/>
        </>
    )
}

export default Admin;