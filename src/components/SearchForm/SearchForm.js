import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Form, Input, Button } from './SearchForm.styled';
import genders from '../../options/genders.json';
import styles from './Select.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
    selectedOption: genders[0],
  };

  handleChangeInput = e => this.setState({ value: e.target.value });

  handleChangeSelect = selectedOption => this.setState({ selectedOption });

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { gender } = this.state.selectedOption.value;
    this.props.onSubmit(value, gender);
    this.reset();
  };

  reset = () => this.setState({ value: '', selectedOption: null });

  render() {
    const { value, selectedOption } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChangeInput} value={value} />
        <Select
          className={styles.select}
          value={selectedOption}
          onChange={this.handleChangeSelect}
          options={genders}
        />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}
