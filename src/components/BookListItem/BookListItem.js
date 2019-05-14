import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Image,
  Title,
  Description,
  Author,
  Publisher,
  PublishedDate,
  PageCount,
} from './BookListItem.styled';

const BookListItem = ({
  title,
  authors,
  publisher,
  publishedDate,
  description,
  pageCount,
  imageLinks,
}) => (
  <Item>
    <Image src={imageLinks.thumbnail} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Author>{authors}</Author>
    <Publisher>{publisher}</Publisher>
    <PublishedDate>{publishedDate}</PublishedDate>
    <PageCount>{pageCount}</PageCount>
  </Item>
);

BookListItem.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
  imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired })
    .isRequired,
  publisher: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  pageCount: PropTypes.string.isRequired,
};

export default BookListItem;
