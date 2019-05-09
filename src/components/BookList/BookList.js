import React from 'react';
import PropTypes from 'prop-types';
import List from './BookList.styled';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ items }) => (
  <List>
    {items.map(item => (
      <BookListItem key={item.key} item={item} />
    ))}
  </List>
);

BookList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default BookList;
