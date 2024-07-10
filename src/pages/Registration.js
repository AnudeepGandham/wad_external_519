import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    birthday: '',
    gender: 'male',
    newsletter: false
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const errors = validateForm(formData);
      if (Object.keys(errors).length === 0) {
        alert('Form is submitted successfully!');
        resetForm();
      } else {
        setFormErrors(errors);
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!data.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (data.phone.length < 10) {
      errors.password = 'Phone number must be at least 10 characters long';
    }

    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }

    if (!data.city.trim()) {
      errors.city = 'City is required';
    }

    if (!data.state.trim()) {
      errors.state = 'State is required';
    }

    if (!data.zip.trim()) {
      errors.zip = 'Zip is required';
    }

    if (!data.country.trim()) {
      errors.country = 'Country is required';
    }

    if (!data.gender.trim()) {
      errors.gender = 'Gender is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      birthday: '',
      gender: 'male',
      newsletter: false
    });
    setFormErrors({});
    setIsSubmitting(false);
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
        </label>
        
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
        </label>
        
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </label>
        
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </label>
        
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
        </label>
        
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {formErrors.phone && <span className="error">{formErrors.phone}</span>}
        </label>
        
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {formErrors.address && <span className="error">{formErrors.address}</span>}
        </label>
        
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          {formErrors.city && <span className="error">{formErrors.city}</span>}
        </label>
        
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
          {formErrors.state && <span className="error">{formErrors.state}</span>}
        </label>
        
        <label>
          Zip Code:
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
          />
          {formErrors.zip && <span className="error">{formErrors.zip}</span>}
        </label>
        
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
          {formErrors.country && <span className="error">{formErrors.country}</span>}
        </label>
        
        <label>
          DateOfBirth:
          <input
            type="date"
            name="dateofbirth"
            value={formData.dateofbirth}
            onChange={handleInputChange}
          />
          {formErrors.dateofbirth && <span className="error">{formErrors.dateofbirth}</span>}
        </label>
        
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formErrors.gender && <span className="error">{formErrors.gender}</span>}
        </label>
        
        <button type="submit">Register</button>
        <p className="navigateToLink" >Already Registered? <Link to="/login">Login</Link></p>
      </form>
      
    </div>
  );
};

export default Registration;
