import { Form } from "../../../Form/Form.styled";
import { Input } from "../../../InputFields";
import { Item, Label, List } from "../../../InputFields/Input.styled";
import { Button } from "../../../Buttons/Button";
import { registration } from "../../../../redux/phonebook/authOperations";
import { useDispatch } from "react-redux";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password } = e.target.elements;

    dispatch(
      registration({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <List>
        <Item>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </Item>
        <Item>
          <Label>Name</Label>
          <Input type="name" name="name" />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input type="password" name="password" />
        </Item>
      </List>
      <Button type="submit" text="Registration" />
    </Form>
  );
};

export default RegistrationForm;
