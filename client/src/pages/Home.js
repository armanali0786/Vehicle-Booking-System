import axios from 'axios'
import React, { useState, useEffect } from 'react'
import UserImage from '../assets/user-image.png';
export default function Home() {
  const [bookingDetails, setBookingDetails] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      const response = await axios.get('http://localhost:6060/api/booking-details');
      setBookingDetails(response.data.data);
    }
    fetchBooking();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString(); 
  
    return `${day}-${month}-${year}`;
  }
  
  return (
    <>
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Booked Vehicles</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      StartDate / End Date
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                {bookingDetails.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src={UserImage} 
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {booking.firstName} {booking.lastName}
                          </p>
                        </div>
                      </div>
                    </td>
                   
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">  {formatDate(booking.startDate)} to {formatDate(booking.endDate)}</p>
                      <p className="text-gray-600 whitespace-no-wrap">Remaining Days: {calculateRemainingDays(booking.endDate)}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative">Booked</span>
                      </span>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function calculateRemainingDays(endDate) {
  const endDateObj = new Date(endDate);
  const today = new Date();
  const timeDifference = endDateObj.getTime() - today.getTime();
  const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return remainingDays;
}