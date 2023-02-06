import { Container, MenuLink, Nav } from "./NavMenu.styled";
import { Outlet } from "react-router-dom";
import { UserMenu } from "../UserMenu";
import { useAuth } from "../../../hooks";

const menu = [
  { text: "sign in", href: "login" },
  { text: "sign up", href: "registration" },
];

const NavMenu = () => {
  const { isLoggedIn, isRefreshing } = useAuth();

  return (
    <>
      <Container>
        {!isLoggedIn && !isRefreshing ? (
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
        {isLoggedIn && !isRefreshing ? <UserMenu /> : null}
      </Container>
      <Outlet />
    </>
  );
};

export default NavMenu;
