import { useState } from "react";
import { useHistory } from "react-router-dom";
import { logIn } from "../../auth/authorization";
import {
  Bg,
  Button,
  CancelButton,
  Container,
  ErrorStyled,
  Form,
  Label,
  Modal,
} from "./Login.styled";

interface ILoginProps {
  statusModal: boolean;
  setModal: (statusModal: boolean) => void;
}

export const fixed = (status: boolean): void => {
  if (status) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

export const Login: React.FC<ILoginProps> = ({ statusModal, setModal }) => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const routeChange = () => {
    const path = "/edit_category/";
    history.push(path);
  };
  const closeModal = () => {
    fixed(false);
    setModal(false);
  };
  const post = async () => {
    const message = await logIn(usernameValue, passwordValue);
    if (message) {
      setError("");
      localStorage.setItem("login", "true");
      routeChange();
    } else {
      setError("Incorrect username or password.");
    }
  };
  return (
    <Bg stateModal={statusModal}>
      <Modal>
        <Form
          id="login-form"
          onSubmit={(event) => {
            event.preventDefault();
            post();
            setUsernameValue("");
            setPasswordValue("");
            closeModal();
          }}
        >
          <Label>Login</Label>
          <input
            onChange={(event) => setUsernameValue(event.target.value)}
            value={usernameValue}
            placeholder="Username"
            required
            type="text"
          />
          <input
            onChange={(event) => setPasswordValue(event.target.value)}
            value={passwordValue}
            placeholder="Password"
            required
            type="password"
          />
          <ErrorStyled>{error}</ErrorStyled>
          <Container>
            <CancelButton
              type="button"
              onClick={() => closeModal()}
              value="Cancel"
            />
            <Button type="submit" value="Login" />
          </Container>
        </Form>
      </Modal>
    </Bg>
  );
};
