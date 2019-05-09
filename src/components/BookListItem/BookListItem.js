import React from 'react';
import {
  Item,
  Image,
  Title,
  Description,
  Author,
  Publisher,
  PublishedDate,
  PageCount,
  Rating,
} from './BookListItem.styled';

const BookListItem = () => (
  <Item>
    <Image />
    <Title />
    <Description />
    <Author />
    <Publisher />
    <PublishedDate />
    <PageCount />
    <Rating />
  </Item>
);

export default BookListItem;
