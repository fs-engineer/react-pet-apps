import { Form } from "../../../Form/Form.styled";
import { useDispatch } from "react-redux";
import { Input } from "../../../InputFields";
import { Item, Label, List } from "../../../InputFields/Input.styled";
import { Button } from "../../../Buttons/Button";
import { login } from "../../../../redux/phonebook/authOperations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(login({ email: email.value, password: password.value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <List>
        <Item>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input type="password" name="password" />
        </Item>
      </List>
      <Button type="submit" text="Login" />
    </Form>
  );
};

export default LoginForm;
