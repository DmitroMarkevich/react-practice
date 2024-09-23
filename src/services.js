import axios from 'axios';
import {BASE_URL} from './config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const fetchData = async (url, options = {}) => {
  try {
    return (await axiosInstance.get(url, options)).data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(new Error(`HTTP error! status: ${error.response.status}`));
    } else if (error.request) {
      return Promise.reject(new Error('No response received from the server.'));
    } else {
      return Promise.reject(new Error(error.message || 'An error occurred while fetching data.'));
    }
  }
};

export const getPlantDetails = (plantId) => {
  if (!plantId) {
    return Promise.reject(new Error('Plant ID is required'));
  }

  return fetchData(`/species/${plantId}`);
};

export const getPlants = (plantName, page) => {
  if (!plantName) {
    return Promise.reject(new Error('Plant name is required'));
  }

  console.log(plantName)

  return fetchData('/species', {
    params: {
      name: plantName,
      country: 'UA',
      offset: (page - 1) * 20,
      limit: 20
    },
  });
}
