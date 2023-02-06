import { NavMenu } from "../Phonebook/NavMenu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../redux/phonebook/authOperations";
import { useAuth } from "../../hooks";

const ContactsLayout = () => {
  const dispatch = useDispatch();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      return;
    }

    dispatch(fetchCurrentUser());
  }, [dispatch, token]);
  return (
    <>
      <NavMenu />
    </>
  );
};

export default ContactsLayout;
