import { useSearchParams } from "react-router-dom";
import { ContactsList } from "../components/Phonebook/ContactsList";
import { FilterByName } from "../components/InputFields";
import { SearchForm } from "../components/Phonebook/SearchForm";
import { Section } from "../components/Section";
import { Title } from "../components/Phonebook/Title";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/phonebook/operations";

const Phonebook = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilter = (value) => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

  return (
    <>
      <Section title="Phonebook">
        <SearchForm />
        <Title title="Contacts" />
        <FilterByName onChange={changeFilter} filter={filter} />
        <ContactsList filter={filter} />
      </Section>
    </>
  );
};

export default Phonebook;
