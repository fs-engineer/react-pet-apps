import { Component } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactsList } from "./ContactsList";
import { FilterByName } from "./FilterByName";
import { SearchForm } from "./SearchForm";
import { Section } from "../Section";
import { Title } from "./Title";
// import { contacts_data } from "../../assets/contactsData";
import { CONTACTS_DATA } from "../../constants";
import storage from "../../helpers/storage";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    // storage.save(CONTACTS_DATA, contacts_data);
    const contacts = storage.get(CONTACTS_DATA);

    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: currentContacts } = this.state;

    if (prevContacts !== currentContacts) {
      storage.save(CONTACTS_DATA, currentContacts);
    }
  }

  addContact = (e) => {
    e.preventDefault();
    const { contacts } = this.state;
    const name = e.target.name.value;
    const isExists = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExists) {
      toast.error(`Contact ${name} is already exists`);
      return;
    }

    const number = e.target.number.value;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));

    toast.info(`Contact ${name} added`);
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContactsByName = this.filterByName();

    return (
      <>
        <Section title="Phonebook">
          <SearchForm addContact={this.addContact} />
          <Title title="Contacts" />
          <FilterByName onChange={this.onChangeInput} filter={filter} />
          <ContactsList
            filteredContactsByName={filteredContactsByName}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default Phonebook;
