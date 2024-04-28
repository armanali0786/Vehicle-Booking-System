import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
const CustomDateRangePicker = ({ dateRange, onChange }) => {
  const [initialDateRange] = useState([dateRange]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const handleSelect = (ranges) => {
    // Check if ranges and range1 are present and valid
    if (ranges && ranges.range1) {
      const { startDate, endDate } = ranges.range1;
      if (startDate && endDate) {
        const StartDate = format(startDate, 'dd-MM-yyyy');
        const EndDate = format(endDate, 'dd-MM-yyyy');
        const selection = {
          StartDate,
          EndDate
        };
        onChange(selection);
      } else {
        console.warn('Invalid start or end date:', startDate, endDate);
      }
    } else {
      console.warn('Invalid ranges or range1:', ranges);
    }
  };
  
  
  

  return (
    <div className="mb-4 mt-48">
      <h3 className="text-lg font-medium mb-2">Select Date Range:</h3>
      <DateRangePicker
        // ranges={initialDateRange}
        // months={2}
        // direction="horizontal"
        onChange={handleSelect}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={initialDateRange}
      />
    </div>
  );
};

export default CustomDateRangePicker;
