import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux/phonebook/selectors";

export const useAuth = () => {
  return {
    userEmail: useSelector(selectUser),
    token: useSelector(selectToken),
  };
};
