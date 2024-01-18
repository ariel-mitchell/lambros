import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RangeCalendar from "./RangeCalendar";
import { addDays } from 'date-fns';

function RentForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
    });
    const carMake = localStorage.getItem('carMake');
    const carModel = localStorage.getItem('carModel');
    const carYear = localStorage.getItem('carYear');
    const carPrice = localStorage.getItem('carPrice');
    const days = Math.round((dateRange.endDate - dateRange.startDate) / (1000 * 3600 * 24)) + 1;
    const invoiceNumber = Math.ceil(Math.random() * 9999999);
    const navigate = useNavigate();
    
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
    
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value)
    }
    
    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleStateChange = (event) => {
        setState(event.target.value);
    }

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value)
    }
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    
    const handleSubmit = async (event) => {
        if (!firstName || !lastName || !phoneNumber || !address || 
            !city || !state || !zipCode || !email) {
            alert('Please fill in all fields.');
            return;
        }
        localStorage.setItem('days', days);
        localStorage.setItem('startDate', dateRange.startDate.toDateString());
        localStorage.setItem('endDate', dateRange.endDate.toDateString());
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('address', address);
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
        localStorage.setItem('zipCode', zipCode);
        localStorage.setItem('email', email);
        localStorage.setItem('invoiceNumber', invoiceNumber)
        navigate('/invoice');
    }
     
    const calculateTotal = () => {
        return days * carPrice * 10 + 500;
    }
        
    return (
        <div className='container' style={{width:'780px'}}>

        <form  onSubmit={handleSubmit}>
            <fieldset className='fieldset'>
                <legend className='legend' style={{width:'63px'}}>Rent</legend>
                <div style={{display:'flex', justifyContent:'space-between'}}><p>{carMake} {carModel} {carYear}</p><p>Daily price: ${carPrice*10}</p></div>
                <div className="form-group">
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' id='firstName' name='firstName' placeholder='First Name' className='form-control' value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' id='lastName' name='lastName' placeholder='Last Name' className='form-control' value={lastName} onChange={handleLastNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor='phoneNumber'>Phone Number:</label>
                    <input type='tel' id='phoneNumber' name='phoneNumber'  placeholder='Phone Number' className='form-control' value={phoneNumber} onChange={handlePhoneNumberChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor='address'>Street Address:</label>
                    <input type='text' id='address' name='address' placeholder='Address' className='form-control' value={address} onChange={handleAddressChange} />
                </div>
                <div className="form-group">
                    <label htmlFor='city'>City:</label>
                    <input type='text' id='city' name='city' placeholder='City' className='form-control' value={city} onChange={handleCityChange} />
                </div>
                <div className="form-group">
                    <label htmlFor='state'>State Abbreviation:</label>
                    <input type='text' id='state' name='state' placeholder='State' className='form-control' value={state} onChange={handleStateChange} />
                </div>
                <div className="form-group">
                    <label htmlFor='zipCode'>Zip Code:</label>
                    <input type='text'  id='zipCode' name='zipCode' placeholder='Zip Code' className='form-control' value={zipCode} onChange={handleZipCodeChange} />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' placeholder='Email' className='form-control' value={email} onChange={handleEmailChange} autoComplete="on" />
                </div>
                Days to rent:
                <RangeCalendar 
                    range={dateRange}
                    setRange={setDateRange}
                />
                <p>Total Days: {days}</p>
                <div style={{display:'flex', justifyContent:'space-between'}}><p>Delivery fee:</p><p> $500</p></div>
                <div style={{display:'flex', justifyContent:'space-between'}}><p>Total cost: </p><p>${calculateTotal()}</p></div>
                <button type="submit" className='btn btn-primary' style={{float:'right'}}>Pay</button>
            </fieldset>
        </form>
        </div>
    );
}

export default RentForm;