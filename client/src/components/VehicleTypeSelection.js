import React,{useState, useEffect} from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { fetchVehicleById } from '../apis/apiCall';

const VehicleTypeSelection = ({ formData, setFormData }) => {
  const { numberOfWheels, vehicleId } = formData;

  const [vehicleTypesById, setVehicleTypesById] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchVehicleById(numberOfWheels); // Call fetchVehicleTypes to get data
        setVehicleTypesById(response.data);
      } catch (error) {
        console.error('Error fetching Bookings Data:', error);
      }
    };
    fetchData();
  }, [numberOfWheels]);



  const handleVehicleTypeChange = (selectedTypeId) => {
    console.log(selectedTypeId)
    setFormData((prevData) => ({
      ...prevData,
      vehicleId: selectedTypeId, // Update vehicleId in formData
      // vehicleId: selectedType.id, //
    }));
  };



  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">Select Vehicle Type 👇🏻</h3>
      <RadioGroup
        value={vehicleId}
        onChange={(e) => handleVehicleTypeChange(e.target.value)}
      >
        {vehicleTypesById.map((type) => (
          <FormControlLabel
            key={type.id}
            value={type.id}
            control={<Radio />}
            label={type.name  }
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default VehicleTypeSelection;
