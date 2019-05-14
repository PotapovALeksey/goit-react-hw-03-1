import axios from 'axios';

export const fetchBooks = (query = 'react', gender = 'computers') => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${gender}`,
    )
    .then(res => res.data);
};

export const eslintGoodBuy = () => null;
