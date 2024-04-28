import React from 'react';
import { TextField } from '@mui/material';

const NameInput = ({ formData, setFormData }) => {
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <div className='flex flex-col gap-3'>
        <h3>First What's your Name</h3>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleNameChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleNameChange}
        />
      </div>
    </>
  );
};

export default NameInput;
