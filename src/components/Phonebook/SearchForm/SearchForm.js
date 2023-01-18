import React, { Component } from "react";
import { Form, NameInput, PhoneInput } from "./SearchForm.styled";
import { Button } from "../../Buttons/Button";

export default class SearchForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const { addContact } = this.props;

    addContact({ name, number });

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <NameInput
          type="text"
          name="name"
          value={name}
          onChange={this.onChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <PhoneInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.onChangeInput}
          required
        />
        <Button type="submit" text="Save contact" />
      </Form>
    );
  }
}
