import { Button } from "../../Buttons/Button";
import { List, ListItem, ItemText } from "./ContactsList.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/phonebook/contactsSlice";

const ContactsList = ({ filteredContactsByName }) => {
  const dispatch = useDispatch();

  return (
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
  );
};

export default ContactsList;
