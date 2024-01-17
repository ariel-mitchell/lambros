

const InvoiceForm = () => {
    const carMake = localStorage.getItem('carMake');
    const carModel = localStorage.getItem('carModel');
    const carYear = localStorage.getItem('carYear');
    const carPrice = localStorage.getItem('carPrice');
    const days = localStorage.getItem('days');
    const startDate = localStorage.getItem('startDate');
    const endDate = localStorage.getItem('endDate');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const address = localStorage.getItem('address');
    const email =localStorage.getItem('email');
    const invoiceNumber = Math.ceil(Math.random() * 9999999);

    return(
        <div style={{width:'60%', margin: '5rem auto'}}>
            <img src="/images/lambros_logo__gold_mockup_.jpg" alt="Lambros" style={{ width: 'auto', height: '5rem', float:'right'}} ></img>
            <h4>Deliver to:</h4>
            <p style={{ paddingLeft: '40px' }}>
                {firstName} {lastName} <br />
                {address} <br />
                Phone number: {phoneNumber} <br />
                Email: {email}
            </p>

            
            <table className="table table-hover table-striped" style={{ marginTop: '50px' }}>
                <thead className="table-dark">
                    <tr>
                        <th>Invoice Number</th>
                        <th>Rental Car</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Total Days</th>
                        <th>Daily Pricing</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{invoiceNumber}</td>
                        <td>{carMake} {carModel} {carYear}</td>
                        <td>{startDate}</td>
                        <td>{endDate}</td>
                        <td>{days}</td>
                        <td>${carPrice * 10}</td>
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>Delivery Fee:</th>
                        <td>$500</td>
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>Subtotal:</th>
                        <td>${days * carPrice * 10}</td>
                    </tr>
                    <tr>
                        
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>Total:</th>
                        <td>${days * carPrice * 10 + 500}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InvoiceForm;