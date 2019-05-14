import React from 'react';
import PropTypes from 'prop-types';
import List from './BookList.styled';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ items }) => (
  <List>
    {items.map(item => (
      <BookListItem key={item.id} {...item} />
    ))}
  </List>
);

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  ).isRequired,
};

export default BookList;
