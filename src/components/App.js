import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

export default class App extends Component {
  state = {
    books: [],
  };

  render() {
    const { books } = this.state;
    return (
      <>
        <SearchForm />
        <BookList items={books} />
      </>
    );
  }
}
