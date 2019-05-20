import React, { Component } from 'react';
import Spinner from 'react-spinkit';
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
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.handleFetchBooks();
  }

  handleFetchBooks = (query = 'react', gender = 'computers') => {
    this.setState({ isLoading: true });

    BooksAPI.fetchBooks(query, gender)
      .then(({ items }) => {
        this.setState({ books: mapper(items) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { books, isLoading, error } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleFetchBooks} />
        {isLoading && (
          <Spinner
            name="ball-clip-rotate-multiple"
            color="blue"
            fadeIn="none"
          />
        )}
        {books.length !== 0 && <BookList items={books} />}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </>
    );
  }
}
