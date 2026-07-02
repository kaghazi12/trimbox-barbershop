import React, { useState, useEffect } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[\d\s()+-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
      isValid = false;
    }

    if (!formData.time) {
      newErrors.time = 'Time slot is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Booking Successful! Payload:', formData);
      setIsSuccess(true);
    }
  };

  const handleBookAnother = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="section-container">
        <div className="section-header js-reveal">
          <h2 className="section-title">Book Your Slot</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="booking-wrapper js-reveal">
          {/* Form Container */}
          {!isSuccess ? (
            <div className="booking-form-container" id="booking-container">
              <form id="booking-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'error' : ''}`}>
                    <label htmlFor="booking-name">Full Name</label>
                    <input 
                      type="text" 
                      id="booking-name" 
                      name="name" 
                      required 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <span className="error-message" id="error-name">{errors.name}</span>
                  </div>
                  <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                    <label htmlFor="booking-phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="booking-phone" 
                      name="phone" 
                      required 
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <span className="error-message" id="error-phone">{errors.phone}</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.email ? 'error' : ''}`}>
                    <label htmlFor="booking-email">Email Address</label>
                    <input 
                      type="email" 
                      id="booking-email" 
                      name="email" 
                      required 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <span className="error-message" id="error-email">{errors.email}</span>
                  </div>
                  <div className={`form-group ${errors.service ? 'error' : ''}`}>
                    <label htmlFor="booking-service">Service</label>
                    <select 
                      id="booking-service" 
                      name="service" 
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="Haircut">Haircut ($35)</option>
                      <option value="Beard Trim">Beard Trim ($20)</option>
                      <option value="Hot Towel Shave">Hot Towel Shave ($30)</option>
                      <option value="Kids Cut">Kids Cut ($25)</option>
                    </select>
                    <span className="error-message" id="error-service">{errors.service}</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.date ? 'error' : ''}`}>
                    <label htmlFor="booking-date">Preferred Date</label>
                    <input 
                      type="date" 
                      id="booking-date" 
                      name="date" 
                      required
                      min={minDate}
                      value={formData.date}
                      onChange={handleChange}
                    />
                    <span className="error-message" id="error-date">{errors.date}</span>
                  </div>
                  <div className={`form-group ${errors.time ? 'error' : ''}`}>
                    <label htmlFor="booking-time">Preferred Time</label>
                    <select 
                      id="booking-time" 
                      name="time" 
                      required
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a Time Slot</option>
                      <option value="09:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">1:00 PM</option>
                      <option value="02:00 PM">2:00 PM</option>
                      <option value="03:00 PM">3:00 PM</option>
                      <option value="04:00 PM">4:00 PM</option>
                      <option value="05:00 PM">5:00 PM</option>
                    </select>
                    <span className="error-message" id="error-time">{errors.time}</span>
                  </div>
                </div>

                <button type="submit" className="btn btn-sharp btn-accent submit-btn">Confirm Appointment</button>
              </form>
            </div>
          ) : (
            /* Success Container */
            <div className="booking-success-container" id="booking-success">
              <div className="success-state">
                <div className="success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="success-title">You're booked!</h3>
                <p className="success-msg">We'll confirm by text shortly.</p>
                <button id="book-another-btn" className="btn btn-sharp btn-accent" onClick={handleBookAnother}>Book Another</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
