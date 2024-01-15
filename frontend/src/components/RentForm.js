import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RangeCalendar from "./RangeCalendar";



function RentForm() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const carMake = localStorage.getItem('carMake');
    const carModel = localStorage.getItem('carModel');
    const carYear = localStorage.getItem('carYear');
    const carPrice = localStorage.getItem('carPrice');
    const days = localStorage.getItem('days');
    // const navigate = useNavigate();
    
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
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async (event) => {
        localStorage.setItem()
    }


    const calculateTotal = () => {
        return days * carPrice * 10 + 200;
    }

    return (
        <div className='container' style={{width:'780px'}}>

        <form  onSubmit={handleSubmit}>
            <fieldset className='fieldset'>
                <legend className='legend' style={{width:'63px'}}>Rent</legend>
                <p>{carMake} {carModel} {carYear}<p style={{float:'right'}}>Daily price: ${carPrice*10}</p></p> 
                <div className="form-group">
                    <label for='firstName'>First Name:</label>
                        <input type='text' id='firstName' name='firstName' placeholder='First Name' className='form-control' value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div className="form-group">
                    <label for='lastName'>Last Name:</label>
                        <input type='text' id='lastName' name='lastName' placeholder='Last Name' className='form-control' value={lastName} onChange={handleLastNameChange} />
                </div>
                <div className="form-group">
                    <label for='phoneNumber'>Phone Number:</label>
                        <input type='text' id='phoneNumber' name='phoneNumber'  placeholder='Phone Number' className='form-control' value={phoneNumber} onChange={handlePhoneNumberChange}  />
                </div>
                <div className="form-group">
                    <label for='address'>Address:</label>
                        <input type='text' id='address' name='address' placeholder='Address' className='form-control' value={address} onChange={handleAddressChange} />
                </div>
                <div className="form-group">
                    <label for='email'>Email:</label>
                        <input type='email' id='email' name='email' placeholder='Email' className='form-control' value={email} onChange={handleEmailChange} autoComplete="on" />
                </div>
                Days to rent:
                <RangeCalendar  />
                <p>Delivery fee:<p style={{float:'right'}}> $200</p></p>
                <p>Total cost:<p style={{float:'right'}}> ${calculateTotal()}</p></p>

                <button type="submit" className='btn btn-primary' style={{float:'right'}}>Pay</button>
            </fieldset>
        </form>
        </div>
    );
}

export default RentForm;