import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

const WheelsSelection = ({ formData, setFormData }) => {
  
  const handleWheelChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      numberOfWheels: newValue // Update numberOfWheels in formData
    }));
  };

  return (
    <>
      <h3 className="text-lg font-medium mb-2">Select Wheel Type 👇🏻</h3>
      <RadioGroup
        value={formData.numberOfWheels} 
        onChange={(e) => handleWheelChange(e.target.value)} 
      >
        <FormControlLabel value="9" control={<Radio />} label="2 Wheels" />
        <FormControlLabel value="10" control={<Radio />} label="4 Wheels" />
      </RadioGroup>
    </>
  );
};

export default WheelsSelection;
