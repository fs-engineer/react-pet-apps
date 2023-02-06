import { Container, MenuLink, Nav } from "./NavMenu.styled";
import { Outlet } from "react-router-dom";
import { UserMenu } from "../UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/phonebook/selectors";

const menu = [
  { text: "sign in", href: "login" },
  { text: "sign up", href: "registration" },
];

const NavMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Container>
        {!isLoggedIn ? (
          <Nav>
            {menu.map(({ text, href }) => (
              <MenuLink
                key={href}
                to={href}
                state={{ isRegistration: text === "sign up" }}
              >
                {text}
              </MenuLink>
            ))}
          </Nav>
        ) : null}
        {isLoggedIn ? <UserMenu /> : null}
      </Container>
      <Outlet />
    </>
  );
};

export default NavMenu;
