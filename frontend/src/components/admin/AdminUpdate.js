
//const axios = require('axios').default;
import React from "react";
import Axios from "axios";

function AdminUpdate(){
    //update car form
    return(
    <div>
        <h1>Edit Car Entry</h1>
        <form method="post">
            <label for="mileage">Mileage:</label><br/>
            <input type="text" id="mileage"/><br/><br/>
            <p>Status:</p>
            <input type="radio" id="available"/>
            <label for="available">Available</label><br/>
            <input type="radio" id="rented"/>
            <label for="rented">Rented</label><br/>
            <input type="radio" id="outofservice"/>
            <label for="outofservice">Out of Service</label><br/><br/>
            <label for="mileage">If Out of Service, please write a reason:</label><br/>
            <input type="text" id="make"/><br/><br/>
            <input type="submit"/>
        </form>
    </div>);
}

export default AdminUpdate;