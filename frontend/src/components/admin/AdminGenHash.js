import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function AdminGenHash(){
    let myHash = "";
    const hashText = document.getElementById("hashText");

    function generateHash(){
        myHash = uuidv4();
        hashText.innerHTML = myHash;
    }
    // button.addEventListener("click", function(event){
    //     
    // });


    return(<div>
        {/* Button for AdminGenHash */}
        <h1>Generate Admin Hash</h1>
            <button onClick={generateHash()}>Generate</button> 
            <p id="hashText"></p>
        <h1>Enter Admin Hash</h1>
            <form method="post">
            <input type="text" id="userin"/><br/>
            <input type="submit"/><br/>
            </form>
    </div>);
}

export default AdminGenHash;