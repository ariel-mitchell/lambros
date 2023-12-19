import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentReview = ({ rentvehicles }) => {
    return (
        <table className="table table-hover table-striped" style={{marginTop:'50px'}}>
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
                    <td className="text-center align-middle">Rent Id:</td>
                    <td className="text-center align-middle">35</td>
                </tr>
                <tr>
                    <td className="text-center align-middle">Vehicle No:</td>
                    <td className="text-center align-middle">1159</td>
                </tr>
                <tr>
                    <td className="text-center align-middle">Customer Name:</td>
                    <td className="text-center align-middle">Barney Rubble</td>
                </tr>
                <tr>
                    <td className="text-center align-middle">Start Date:</td>
                    <td className="text-center align-middle">2016-11-01</td>
                    <td className="text-center align-middle">Begin Mileage:</td>
                    <td className="text-center align-middle">5000</td>
                </tr>
                <tr>
                    <td className="text-center align-middle">Return Date:</td>
                    <td className="text-center align-middle">2016-12-01</td>
                    <td className="text-center align-middle">Gas Level:</td>
                    <td className="text-center align-middle">Full</td>
                </tr>
                <tr>
                    <td className="text-center align-middle"># of Day:</td>
                    <td className="text-center align-middle">30</td>
                </tr>
                <tr>
                    <td className="text-center align-middle"># of Weeks:</td>
                    <td className="text-center align-middle">30</td>
                </tr>
                <tr>
                    <td className="text-center align-middle">Daily Rate$:</td>
                    <td className="text-center align-middle">$900</td>
                </tr>
                <tr>
                    <td className="text-center align-middle">Total Rent$:</td>
                    <td className="text-center align-middle">$900</td>
                </tr>
                <tr>
                    <td className="text-center align-middle">Payment Type:</td>
                    <td className="text-center align-middle">American Express</td>
                </tr>
                <tr>
                    <td className="text-center align-middle"><button className='btn btn-primary'>PAY</button></td>
                </tr>

                {/* {rentvehicles.map((rentvehicles, index) => (
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

export default PaymentReview;
