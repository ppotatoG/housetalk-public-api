import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('외부 API URL');
  return response.data;
};
