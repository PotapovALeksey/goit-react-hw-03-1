import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

export default class App extends Component {
  state = {
    books: [],
  };

  render() {
    return (
      <>
        <SearchForm />
        <BookList items={this.state.books} />
      </>
    );
  }
}
