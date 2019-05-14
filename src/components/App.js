import React, { Component } from 'react';
import * as BooksAPI from '../services/book-api';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

const mapper = items => {
  return items.map(({ volumeInfo: book, id }) => ({
    ...book,
    id,
  }));
};

export default class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.fetchBooks().then(({ items }) =>
      this.setState({ books: mapper(items) }),
    );
  }

  handleFetchBooksOnSubmit = (query, gender) => {
    BooksAPI.fetchBooks(query, gender).then(({ items }) => {
      this.setState({ books: mapper(items) });
    });
  };

  render() {
    const { books } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleFetchBooksOnSubmit} />
        <BookList items={books} />
      </>
    );
  }
}
