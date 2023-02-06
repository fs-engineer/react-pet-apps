import { useSelector } from "react-redux";
import { contactsSelectors } from "../redux/phonebook";

export const useContact = () => ({
  contacts: useSelector(contactsSelectors.selectContacts),
  isLoading: useSelector(contactsSelectors.selectIsLoading),
  error: useSelector(contactsSelectors.selectError),
});
