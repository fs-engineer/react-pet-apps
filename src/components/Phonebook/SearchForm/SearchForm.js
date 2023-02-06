import React, { useState } from "react";
import { Form, NameInput, PhoneInput } from "./SearchForm.styled";
import { Button } from "../../Buttons/Button";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/phonebook/contactsOperations";
import { useContact } from "../../../hooks";

const SearchForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const { contacts } = useContact();
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const isExists = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExists) {
      toast.error(`Contact ${name} is already exists`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(newContact));

    toast.info(`Contact ${name} added`);

    form.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <NameInput
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <Button type="submit" text="Save contact" />
    </Form>
  );
};

export default SearchForm;
