import { useState } from "react";


function Rent() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
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
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div className='container' style={{width:'410px'}}>

        <form  onSubmit={handleSubmit}>
            <fieldset className='fieldset'>
                <legend className='legend-two'>Rent</legend>
                <div className="form-group">
                    <label>
                        First Name:
                        <input type='text' id='firstName' name='firstName' placeholder='First Name' className='form-control' value={firstName} onChange={handleFirstNameChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Last Name:
                        <input type='text' id='lastName' name='lastName' placeholder='Last Name' className='form-control' value={lastName} onChange={handleLastNameChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Phone Number:
                        <input type='text' id='phoneNumber' name='phoneNumber'  placeholder='Phone Number' className='form-control' value={phoneNumber} onChange={handlePhoneNumberChange}  />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Address:
                        <input type='text' id='address' name='address' placeholder='Address' className='form-control' value={address} onChange={handleAddressChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                        <input type='email' id='email' name='email' placeholder='email' className='form-control' value={email} onChange={handleEmailChange} autoComplete="on" />
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit" className='btn btn-primary' style={{float:'right'}}>Register</button>
                </div>
            </fieldset>
        </form>
        </div>
    );
}

export default Rent;