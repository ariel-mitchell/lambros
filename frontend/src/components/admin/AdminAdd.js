//const axios = require('axios').default;
import React from "react";
import Axios from "axios";

function AdminAdd(){
    // //Axios post protocol stolen from online
    // const [post, setPost] = React.useState(null);

    // React.useEffect(() => {
    //     Axios.get(`${baseURL}/1`).then((response) => {
    //     setPost(response.data);
    //     });
    // }, []);

    // function createPost() {
    //     Axios
    //     .post(baseURL, {
    //         title: "Hello World!",
    //         body: "This is a new post."
    //     })
    //     .then((response) => {
    //         setPost(response.data);
    //     });
    // }

    // if (!post) return "No post!"

    // return (
    //     <div>
    //     <h1>{post.title}</h1>
    //     <p>{post.body}</p>
    //     <button onClick={createPost}>Create Post</button>
    //     </div>
    // );
    
    //add car form
    return(
    <div>
        <h1>New Car Entry</h1>
        <form method="post">
            <label for="make">Make:</label><br/>
            <input type="text" id="make"/><br/>
            <label for="model">Model:</label><br/>
            <input type="text" id="model"/><br/>
            <label for="year">Year:</label><br/>
            <input type="text" id="year"/><br/>
            <label for="price">Price:</label><br/>
            <input type="text" id="price"/><br/>
            <label for="mileage">Mileage:</label><br/>
            <input type="text" id="make"/><br/>
            <label for="status">Ready to rent?:</label><br/>
            <input type="checkbox" id="status"/><br/>
            <input type="submit"/>
        </form>
    </div>);
}

export default AdminAdd;