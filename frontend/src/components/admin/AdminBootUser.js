import React, { useEffect } from 'react';
import { redirect } from "react-router-dom";

function AdminBootUser(){
    try {
        const isAdmin = localStorage.getItem("isAdmin");
        if(!isAdmin){
            console.log("TRY SUCCEEDED")
            return (<meta http-equiv="refresh" content="0; URL=http://localhost:3000/*" />);
        }
    } catch {
        console.log("TRY FAILED")
        return (<meta http-equiv="refresh" content="0; URL=http://localhost:3000/*" />);
    }

    // const loader = async () => {
    //     //const user = await getUser();
    //     //if (!user) {
    //     //   return redirect("/login");
    //     //}
    //     //return null;
    //   };
}

export default AdminBootUser;