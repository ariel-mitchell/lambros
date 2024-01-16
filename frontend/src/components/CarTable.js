import React from 'react';
import Axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const CarTable = ({ cars }) => {

    //grab data from backend
    const [post, setPost] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        Axios.get('http://localhost:8080/cars').then((response) => {
            setPost(response.data);
            console.log(response.data)
        });
    }, []);

    const handleRentButton = (car) => {
        localStorage.setItem('carMake', car.make);
        localStorage.setItem('carModel', car.model);
        localStorage.setItem('carYear', car.year);
        localStorage.setItem('carPrice', car.price);
        navigate('/rent');
    }

    //kick out attemped responses before promise is fulfilled
    if (!post) return null
    //return table with updated car data
    return (
        <table className="table table-hover table-striped" style={{ marginTop: '50px' }}>
            <thead className="table-dark">
                <tr>
                    <th></th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price Per Hour*</th>
                    <th>Price Per Day*</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {post.map((car, index) => (
                    <tr key={index}>
                        {/* <td><img src={car.picture} alt={`${car.make} ${car.model}`} style={{ width: '200px' }} /></td> */}
                        <td><img src={'/images/' + car.carImg} style={{ width: '200px' }}></img></td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>${car.price}</td>
                        <td>${car.price * 10}</td>
                        <td><button className='btn btn-primary' onClick={() => handleRentButton(car)}>RENT</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CarTable;