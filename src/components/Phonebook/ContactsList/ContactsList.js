import { Button } from "../../Buttons/Button";
import { List, ListItem, ItemText } from "./ContactsList.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/phonebook/contactsOperations";
import { LoadingSpinner } from "../../LoadingSpinner";
import { useContact } from "../../../hooks";

const ContactsList = ({ filter }) => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useContact();

  const filteredContactsByName = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading ? <LoadingSpinner /> : null}
      <List>
        {Array.isArray(filteredContactsByName) &&
          filteredContactsByName.length > 0 &&
          filteredContactsByName.map(({ name, number, id }) => (
            <ListItem key={id}>
              <ItemText>
                {name}: <span>{number}</span>
              </ItemText>
              <Button
                text="Delete"
                onClick={(e) => dispatch(deleteContact(e.target.dataset.id))}
                id={id}
              />
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default ContactsList;
