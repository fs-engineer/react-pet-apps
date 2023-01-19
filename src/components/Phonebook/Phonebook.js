import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { ContactsList } from "./ContactsList";
import { FilterByName } from "./FilterByName";
import { SearchForm } from "./SearchForm";
import { Section } from "../Section";
import { Title } from "./Title";
// import { initContacts } from "../../assets/contactsData";
import { CONTACTS_DATA } from "../../constants";
import storage from "../../helpers/storage";

const Phonebook = () => {
  const [contacts, setContacts] = useState(storage.get(CONTACTS_DATA) || []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    storage.save(CONTACTS_DATA, contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
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

    setContacts((prevContacts) => [newContact, ...prevContacts]);

    toast.info(`Contact ${name} added`);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const filterByName = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContactsByName = filterByName();

  return (
    <>
      <Section title="Phonebook">
        <SearchForm addContact={addContact} />
        <Title title="Contacts" />
        <FilterByName onChange={setFilter} filter={filter} />
        <ContactsList
          filteredContactsByName={filteredContactsByName}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};

export default Phonebook;
