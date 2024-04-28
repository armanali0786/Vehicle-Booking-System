import React, { useState } from 'react'
import FormComponent from '../components/FormComponent';
// import { BookedVehicle } from '../apis/apiCall';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function VehicleBooking() {
  const naviagate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        numberOfWheels: '',
        vehicleId: '',
        StartDate: '',
        EndDate: '',
    });

      const handleFormSubmit = async (formDataWithDateRange) => {
        // Destructure StartDate and EndDate from dateRange
        const { StartDate, EndDate } = formDataWithDateRange.dateRange;
      
        try {
          const formData ={
            ...formDataWithDateRange, // Spread existing formDataWithDateRange
            StartDate, // Add StartDate as a property
            EndDate,   // Add EndDate as a property
          }
          // Pass formData and StartDate/EndDate to BookedVehicle
          const response = await axios.post(`http://localhost:6060/api/booking`, formData,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
          toast.success(response.messsage);
          naviagate('/');
        } catch (error) {
          console.error('Error booking vehicle:', error);
          if (error.response && error.response.data) {
            toast.error('Vehicle is already booked for this time. Please choose different dates.');
          } else {
            toast.error('An error occurred while booking the vehicle. Please try again.');
          }
        }
      };
      
  

    return (
      <>
      <ToastContainer />
        <div className="conatiner mx-auto flex justify-center w-full h-screen py-3 bg-gray-100">
            <FormComponent
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleFormSubmit}
            />
        </div>
      </>
    )
}
