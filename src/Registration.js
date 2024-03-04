import React, { useState } from 'react';
import './Registration.css'; 

const RegistrationForm = () => {

const [data, setData] = useState({
    firstName: '',
    lastName: '',
    npi: '',
    address: '',
    phone: '',
    email: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form', data);
    setData({
        firstName: '',
        lastName: '',
        npi: '',
        address: '',
        phone: '',
        email: '',
    })
}

return (
<div className="registration-form">
    <form onSubmit={handleSubmit}>
        <div>
            <label className="label">First Name</label>
            <input className="input" name="firstName" type="text" value={data.firstName} onChange={handleChange} required />
        </div>
        <div>
            <label className="label">Last Name</label>
            <input className="input" name="lastName" type="text" value={data.lastName} onChange={handleChange} required />
        </div>
        <div>
            <label className="label">Npi Number</label>
            <input className="input"name="npi" type="number" value={data.npi} onChange={handleChange} required />    
        </div>
        <div>
            <label className="label">Business Address</label>
            <input className="input" name="address" type="text" value={data.address} onChange={handleChange} required />
        </div>
        <div>
            <label className="label">Telephone Number</label>
            <input className="input" name="phone" type="number" value={data.phone} onChange={handleChange} required />
        
        </div>
        <div>
            <label className="label">Email Address</label>
            <input className="input" name="email" type="email" value={data.email} onChange={handleChange} required />
            
        </div>
        <button className="button" name="submit" type="submit">Submit</button>
    </form>
</div>
);
};

export default RegistrationForm;
