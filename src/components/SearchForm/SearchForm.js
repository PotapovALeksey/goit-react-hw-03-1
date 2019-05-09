import React, { Component } from 'react';
import { Form, Input, Button } from './SearchForm.styled';
import Select from 'react-select';
import genders from '../../options/genders.json';
import styles from './Select.module.css';

export default class SearchForm extends Component {
  state = {
    value: '',
    selectedOption: '',
  };

  handleChangeInput = e => this.setState({ value: e.target.value });

  handleChangeSelect = selectedOption =>
    this.setState({ selectedOption: selectedOption });

  render() {
    const { value, selectedOption } = this.state;
    return (
      <Form>
        <Input onChange={this.handleChangeInput} value={value} />
        <Select
          className={styles.select}
          value={selectedOption}
          onChange={this.handleChangeSelect}
          options={genders}
        />
        <Button>Search</Button>
      </Form>
    );
  }
}
