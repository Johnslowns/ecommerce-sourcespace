import { useState } from 'react';

export default function ShippingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    deliveryMethod: 'standard', // default option
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Add your form submission logic here (e.g., send data to an API)
  };

  return (
    <form className="shipping-form" onSubmit={handleSubmit}>
      <h2>Shipping Information</h2>
      
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input 
          type="text" 
          id="fullName"
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input 
          type="text" 
          id="address"
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input 
          type="text" 
          id="city"
          name="city" 
          value={formData.city} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input 
          type="text" 
          id="state"
          name="state" 
          value={formData.state} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="zipCode">ZIP Code:</label>
        <input 
          type="text" 
          id="zipCode"
          name="zipCode" 
          value={formData.zipCode} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input 
          type="text" 
          id="country"
          name="country" 
          value={formData.country} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <h2>Delivery Method</h2>
      
      <div className="radio-group">
        <input 
          type="radio" 
          id="standard" 
          name="deliveryMethod" 
          value="standard" 
          checked={formData.deliveryMethod === 'standard'} 
          onChange={handleChange} 
        />
        <label htmlFor="standard">Standard Delivery</label>
      </div>
      
      <div className="radio-group">
        <input 
          type="radio" 
          id="express" 
          name="deliveryMethod" 
          value="express" 
          checked={formData.deliveryMethod === 'express'} 
          onChange={handleChange} 
        />
        <label htmlFor="express">Express Delivery</label>
      </div>
      
      <div className="radio-group">
        <input 
          type="radio" 
          id="overnight" 
          name="deliveryMethod" 
          value="overnight" 
          checked={formData.deliveryMethod === 'overnight'} 
          onChange={handleChange} 
        />
        <label htmlFor="overnight">Overnight Delivery</label>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}
