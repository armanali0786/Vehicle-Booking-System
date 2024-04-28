// Example component where you want to fetch vehicle types based on number of wheels
import axios from 'axios';



const fetchVehicleById = async (typeId) => {
  try {
    const response = await axios.get(`http://localhost:6060/api/vehicle/${typeId}`);
    return response.data; // Array of vehicle models
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    return [];
  }
};


export {
  fetchVehicleById,
};
