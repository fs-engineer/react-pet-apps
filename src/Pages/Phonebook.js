import { useSearchParams } from "react-router-dom";
import { ContactsList } from "../components/Phonebook/ContactsList";
import { FilterByName } from "../components/InputFields";
import { SearchForm } from "../components/Phonebook/SearchForm";
import { Section } from "../components/Section";
import { Title } from "../components/Phonebook/Title";
import { useSelector } from "react-redux";
import { getContacts } from "../redux/phonebook/selectors";

const Phonebook = () => {
  const contacts = useSelector(getContacts);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";

  const changeFilter = (value) => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

  const filteredContactsByName = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <SearchForm />
        <Title title="Contacts" />
        <FilterByName onChange={changeFilter} filter={filter} />
        <ContactsList filteredContactsByName={filteredContactsByName} />
      </Section>
    </>
  );
};

export default Phonebook;
