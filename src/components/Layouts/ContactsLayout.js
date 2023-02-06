import { NavMenu } from "../Phonebook/NavMenu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../redux/phonebook/authOperations";

const ContactsLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <NavMenu />
    </>
  );
};

export default ContactsLayout;
