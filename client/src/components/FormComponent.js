import React, { useState} from 'react';
import NameInput from './NameInput';
import WheelsInput from './WheelSelection';
import VehicleTypeInput from './VehicleTypeSelection';
import CustomDateRangePicker from './DateRangePicker';

const FormComponent = ({ formData, setFormData, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null
  });
  const handleDateRangeChange = (selection) => {
    setDateRange(selection);
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 4) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        const formDataWithDateRange = { ...formData,dateRange };
        onSubmit(formDataWithDateRange );
      }
      setError('');
    } else {
      setError('Please fill the current Fields.');
    }
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() !== '' && formData.lastName.trim() !== '';
      case 2:
        return formData.numberOfWheels !== '';
      case 3:
        return formData.vehicleId !== '';
      case 4:
        return dateRange.startDate !== null && dateRange.endDate !== null;
      default:
        return true;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <NameInput formData={formData} setFormData={setFormData} />;
      case 2:
        return <WheelsInput formData={formData} setFormData={setFormData} />;
      case 3:
        return <VehicleTypeInput formData={formData} setFormData={setFormData} />;
      case 4:
        return <CustomDateRangePicker dateRange={dateRange} onChange={handleDateRangeChange} />;
      default:
        return null;
    }
  };

  

  return (
    <div className='w-full h-[300px] flex justify-center items-center'>
      <div className='w-1/2 pt-10  border border-1 border-gray-300 bg-slate-100 px-5 py-2 text-center rounded-xl shadow-2xl shadow-black-100'>
        {renderCurrentStep()}
        {error && <div className='text-red-500 mt-4'>{error}</div>}
        {currentStep < 5 ? (
          <button className="my-5 w-full p-2 bg-gray-600 text-white rounded-lg border-2 w-16 hover:bg-indigo-800 hover:text-white" onClick={handleNext}>Next</button>
        ) : (
          <button className="my-5 w-1/4 p-2 bg-gray-600 text-white rounded-lg border-2 w-16 hover:bg-indigo-800 hover:text-white" onClick={handleNext}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default FormComponent;