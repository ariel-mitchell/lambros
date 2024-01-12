import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarTable = ({ cars }) => {
    
    return (
        <table className="table table-hover table-striped" >
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
                <tr>
                    <td><img src='/images/LamHur23.png' style={{ width: '200px' }}></img></td>
                    <td className="text-center align-middle">Lamborghini</td>
                    <td className="text-center align-middle">Huracan EVO Spyder</td>
                    <td className="text-center align-middle">2023</td>
                    <td className="text-center align-middle">$300</td>
                    <td className="text-center align-middle">$3000</td>
                    <td className="text-center align-middle"><button className='btn btn-primary'>RENT</button></td>
                </tr>
                <tr>
                    <td><img src='/images/LamHur23.png' style={{ width: '200px' }}></img></td>
                    <td className="text-center align-middle">Lamborghini</td>
                    <td className="text-center align-middle">Huracan EVO Spyder</td>
                    <td className="text-center align-middle">2023</td>
                    <td className="text-center align-middle">$300</td>
                    <td className="text-center align-middle">$3000</td>
                    <td className="text-center align-middle"><button className='btn btn-primary'>RENT</button></td>
                </tr>
                <tr>
                    <td><img src='/images/LamHur23.png' style={{ width: '200px' }}></img></td>
                    <td className="text-center align-middle">Lamborghini</td>
                    <td className="text-center align-middle">Huracan EVO Spyder</td>
                    <td className="text-center align-middle">2023</td>
                    <td className="text-center align-middle">$300</td>
                    <td className="text-center align-middle">$3000</td>
                    <td className="text-center align-middle"><button className='btn btn-primary'>RENT</button></td>
                </tr>
                {/* {cars.map((car, index) => (
                    <tr key={index}>
                        <td><img src={car.picture} alt={`${car.make} ${car.model}`} style={{ width: '200px' }} /></td>
                        <td className="text-center align-middle">{car.make}</td>
                        <td className="text-center align-middle">{car.model}</td>
                        <td className="text-center align-middle">{car.year}</td>
                        <td className="text-center align-middle">${car.hourlyPricing}</td>
                        <td className="text-center align-middle">${car.dailyPricing}</td>
                    </tr>
                ))} */}                
            </tbody>
        </table>
        
    );
};

export default CarTable;
