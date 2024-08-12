import axios from 'axios';
import {BASE_URL, API_KEY} from './config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
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

export const getTrending = () => {
  return fetchData('/trending/movie/day');
};

export const getMovieDetails = (movieId) => {
  if (!movieId) {
    return Promise.reject(new Error('Movie ID is required'));
  }

  return fetchData(`/movie/${movieId}`);
};

export const getMovies = (movieName, page) => {
  if (!movieName) {
    return Promise.reject(new Error('Movie name is required'));
  }

  return fetchData('/search/movie', {
    params: {
      query: movieName,
      page: page
    },
  });
}

export const getCast = (movieId, page) => {
  if (!movieId) {
    return Promise.reject(new Error('Movie ID is required'));
  }

  return fetchData(`/movie/${movieId}/credits`, {
    params: {
      page: page
    }
  });
};

export const getReviews = (movieId, page) => {
  if (!movieId) {
    return Promise.reject(new Error('Movie ID is required'));
  }

  return fetchData(`/movie/${movieId}/reviews`, {
    params: {
      page: page
    }
  });
};
