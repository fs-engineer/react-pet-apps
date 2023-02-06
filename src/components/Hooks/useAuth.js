import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux/phonebook/selectors";

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    token: useSelector(selectToken),
  };
};
