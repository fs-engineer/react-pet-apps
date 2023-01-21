import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { ContactsList } from "../components/Phonebook/ContactsList";
import { FilterByName } from "../components/InputFields";
import { SearchForm } from "../components/Phonebook/SearchForm";
import { Section } from "../components/Section";
import { Title } from "../components/Phonebook/Title";
// import { initContacts } from "../../assets/contactsData";
import { CONTACTS_DATA } from "../constants";
import storage from "../helpers/storage";

const Phonebook = () => {
  const [contacts, setContacts] = useState(storage.get(CONTACTS_DATA) || []);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";

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

  const changeFilter = (value) => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

  const filteredContactsByName = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <SearchForm addContact={addContact} />
        <Title title="Contacts" />
        <FilterByName onChange={changeFilter} filter={filter} />
        <ContactsList
          filteredContactsByName={filteredContactsByName}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};

export default Phonebook;
