import { useState } from "react";
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

interface IPopup {
  statusModal: boolean;
  setModal: (statusModal: boolean) => void;
  login: boolean;
  setLogIn: (status: boolean) => void;
}

export const fixed = (status: boolean): void => {
  if (status) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

export const Login: React.FC<IPopup> = ({
  statusModal,
  setModal,
  login,
  setLogIn,
}) => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");

  const closeModal = () => {
    fixed(false);
    setModal(false);
  };
  const post = async () => {
    const message = await logIn(usernameValue, passwordValue);
    if (message) {
      setLogIn(true);
      setError("");
    } else {
      setLogIn(false);
      setError("Incorrect username or password.");
    }
  };
  if (login) {
    closeModal();
  }
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
