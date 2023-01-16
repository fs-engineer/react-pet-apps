import { IconBtnStyled } from "./IconButton.styled";

const IconButton = ({ children, type, onClick, icon, id = "none" }) => {
  return (
    <IconBtnStyled type={type} onClick={onClick} id={id}>
      {children}
    </IconBtnStyled>
  );
};

export default IconButton;
