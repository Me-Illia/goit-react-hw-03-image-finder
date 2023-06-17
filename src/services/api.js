import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36561636-6b9f25e7a383617fe07257a83';

export const PixabayPictures = async (q, page) => {
  const params = {
    key: KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
  };
  const response = await axios.get(axios.defaults.baseURL, { params });
  return response.data;
};
