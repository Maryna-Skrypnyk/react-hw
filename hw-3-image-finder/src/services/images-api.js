// import dotenv from 'dotenv';
// dotenv.config();
// const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22687504-cd17fd3731d2b66e1d47a182f';
const PER_PAGE = 12;

function fetchImages(searchQuery, page = 1) {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    q: searchQuery,
    page,
    per_page: PER_PAGE,
    key: API_KEY,
  });
  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (response.ok) {
      return response.json().then(data => data.hits);
    }

    return Promise.reject(
      new Error(`There are no images on request ${searchQuery}`),
    );
  });
}

// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   // key: '21915448-ca2a23b845d7ec90c85800139',
//   key: '22687504-cd17fd3731d2b66e1d47a182f',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// const fetchImages = async (searchQuery, page) => {
//   try {
//     const { data } = await axios.get('', {
//       params: {
//         q: searchQuery,
//         page,
//       },
//     });
//     return data.hits;
//   } catch (error) {
//     return [];
//   }
// };

const api = {
  fetchImages,
};

export default api;
