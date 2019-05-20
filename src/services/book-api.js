import axios from 'axios';

export const fetchBooks = (query, gender) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${gender}`,
    )
    .then(
      res =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve(res.data);
          }, 600);
        }),
    );
};

export const eslintGoodBuy = () => null;
