import React from 'react';
import '../AddContact/add.css'; // Import as a global stylesheet
import Navbar from '@/components/Navbar';



const AddContact = () => {
  return (
    <>
      <Navbar />
      <div className="form-container">
        <h3 className="text-center mb-4" style={{ color: '#cf3ef3' }}>
          Add Contact
        </h3>
        <form>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-custom rounded-pill">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddContact;
