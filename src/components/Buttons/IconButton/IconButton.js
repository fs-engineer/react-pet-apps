import { IconBtnStyled } from "./IconButton.styled";

const IconButton = ({ children, type, onClick, icon, id = "none" }) => (
  <IconBtnStyled type={type} onClick={onClick} id={id}>
    {children}
  </IconBtnStyled>
);

export default IconButton;
