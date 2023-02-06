import { useSelector } from "react-redux";
import { authSelectors } from "../redux/phonebook";

export const useAuth = () => {
  return {
    user: useSelector(authSelectors.selectUser),
    token: useSelector(authSelectors.selectToken),
    isLoggedIn: useSelector(authSelectors.selectIsLoggedIn),
    isRefreshing: useSelector(authSelectors.selectIsRefreshing),
  };
};
