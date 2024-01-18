import React from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const CarTable = ({ cars }) => {
    
    //grab data from backend
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        Axios.get('http://localhost:8080/cars/admin').then((response) => {
        setPost(response.data);
        });
    }, []);

    //kick out attemped responses before promise is fulfilled
    if (!post) return null
    //return table with updated car data
    return (
        <table className="table table-hover table-striped" style={{marginTop:'50px'}}>
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price Per Hour*</th>
                    <th>Price Per Day*</th>
                    <th>Car Status</th>
                </tr>
            </thead>
            <tbody>
                {post.map((car, index) => (
                    <tr key={index}>
                        <td>{car.id}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>${car.price}</td>
                        <td>${car.price * 10}</td>
                        <td>{car.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CarTable;