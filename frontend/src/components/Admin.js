//const axios = require('axios').default;
import React from "react";
import Axios from "axios";

function Admin(){
    console.log("BARE MINIMUM");
    // window.addEventListener("load", function() {
    //     fetch("http://localhost:3000/admin").then( function(response) {
    //         response.json().then( function(json) {
    //             const returnDiv = document.createElement("div");
    //             const returnString = ""   
    //             for(const car in json){
    //                 returnString += `
    //                     <ul>
    //                     <li>Make: ${car.make}</li>
    //                     <li>Model: ${car.model}</li>
    //                     <li>Year: ${car.year}</li>
    //                     <li>Price: ${car.price}</li>
    //                     <li>Mileage: ${car.mileage}</li>
    //                     <li>Status: ${car.status}</li>
    //                     </ul>
    //                 `;
    //             }
    //             returnDiv.innerHTML = returnString;
    //             return returnDiv;
    //         });
    //     });
    //  });
    // Axios.get('http://localhost:8080/admin')
    // .then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        Axios.get('http://localhost:8080/admin').then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null

    console.log(post[1].make);
    // if (!post) return null;

    // return (
    //     <div>
    //     <h1>{post.title}</h1>
    //     <p>{post.body}</p>
    //     </div>
    // );
    // window.addEventListener("load", function() {
    //     //fetch("http://localhost:8080/admin", {mode: 'no-cors'}).then( function(response) {
    //     fetch("http://date.jsontest.com/").then( function(response) {
    //         // response.json().then( function(json) {
    //         //     const div = document.getElementById("weather-conditions");
    //         //     const returnString = ""   
    //         //     for(const car in json){
    //         //         div.innerHTML =+ `
    //         //             <ul>
    //         //                 <li>Car ${car.make}</li>
    //         //             </ul>
    //         //         `;      
    //         //     }
    //         // });
            
    //         console.log(response);
    //     });
    // });

    // return (<div>
    //     <p>
    //         {returnString}
    //     </p>
    // </div>);

    // const returnString = "Debug me daddy";
    // return (<div>
    //     <p>
    //         {returnString}
    //     </p>
    // </div>);
    return;
}

export default Admin;