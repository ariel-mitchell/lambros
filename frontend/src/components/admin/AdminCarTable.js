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
                        <td className="text-center align-middle">{car.id}</td>
                        <td className="text-center align-middle">{car.make}</td>
                        <td className="text-center align-middle">{car.model}</td>
                        <td className="text-center align-middle">{car.year}</td>
                        <td className="text-center align-middle">${car.price}</td>
                        <td className="text-center align-middle">${car.price * 10}</td>
                        <td className="text-center align-middle">{car.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CarTable;