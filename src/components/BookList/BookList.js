import React from 'react';
import List from './BookList.styled';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ items }) => (
  <List>
    {items.map(item => (
      <BookListItem item={item} />
    ))}
  </List>
);

export default BookList;
