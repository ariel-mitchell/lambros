import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarTable = ({ cars }) => {
    return (
        <table className="table table-hover table-striped" style={{marginTop:'50px'}}>
            <thead className="table-dark">
                <tr>
                    <th></th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price Per Hour*</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src='/images/LamHur23.png' style={{ width: '200px' }}></img></td>
                    <td className="text-center align-middle">Lamborghini</td>
                    <td className="text-center align-middle">Huracan EVO Spyder</td>
                    <td className="text-center align-middle">2023</td>
                    <td className="text-center align-middle">$300</td>
                    <td className="text-center align-middle"><button className='btn btn-primary'>RENT</button></td>
                </tr>
                <tr>
                    <td><img src='/images/LamHur23.png' style={{ width: '200px' }}></img></td>
                    <td className="text-center align-middle">Lamborghini</td>
                    <td className="text-center align-middle">Huracan EVO Spyder</td>
                    <td className="text-center align-middle">2023</td>
                    <td className="text-center align-middle">$300</td>
                    <td className="text-center align-middle"><button className='btn btn-primary'>RENT</button></td>
                </tr>
                <tr>
                    <td><img src='/images/LamHur23.png' style={{ width: '200px' }}></img></td>
                    <td className="text-center align-middle">Lamborghini</td>
                    <td className="text-center align-middle">Huracan EVO Spyder</td>
                    <td className="text-center align-middle">2023</td>
                    <td className="text-center align-middle">$300</td>
                    <td className="text-center align-middle"><button className='btn btn-primary'>RENT</button></td>
                </tr>
                {/* {cars.map((car, index) => (
                    <tr key={index}>
                        <td><img src={car.picture} alt={`${car.make} ${car.model}`} style={{ width: '100px' }} /></td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>${car.dailyPricing}</td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    );
};

export default CarTable;
