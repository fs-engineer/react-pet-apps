import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../../redux/phonebook/selectors";
import { Button } from "../../Buttons/Button";
import { Container, Name } from "./UserMenu.styled";
import { logout } from "../../../redux/phonebook/authOperations";

const UserMenu = () => {
  const userName = useSelector(selectUserName) || "";
  const dispatch = useDispatch();

  return (
    <Container>
      <Name>{userName}</Name>
      <Button text="Logout" padding={5} onClick={() => dispatch(logout())} />
    </Container>
  );
};

export default UserMenu;
