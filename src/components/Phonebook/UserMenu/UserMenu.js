import { useDispatch } from "react-redux";
import { Button } from "../../Buttons/Button";
import { Container, Name } from "./UserMenu.styled";
import { logout } from "../../../redux/phonebook/authOperations";
import { useAuth } from "../../Hooks/useAuth";

const UserMenu = () => {
  const { user } = useAuth();
  console.log(user);
  const dispatch = useDispatch();

  return (
    <Container>
      <Name>{user?.name}</Name>
      <Button text="Logout" padding={5} onClick={() => dispatch(logout())} />
    </Container>
  );
};

export default UserMenu;
