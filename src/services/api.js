import axios from 'axios';

axios.defaults.baseURL = 'https://64899d3e5fa58521caafed73.mockapi.io';

export const getTweets = async () => {
  return await axios.get(`/users`);
};
