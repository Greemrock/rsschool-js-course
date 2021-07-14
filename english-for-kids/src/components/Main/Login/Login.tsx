import { useState } from "react";
import styled from "styled-components";
import { logIn } from "../../../AdminPage/auth/authorization";

const Bg = styled.div<{ stateModal: boolean }>`
  display: ${({ stateModal }) => (stateModal ? "flex" : "none")};
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #2a2a2ac2;
  z-index: 3;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 810px;
  height: 570px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 3;

  input[type="text"],
  input[type="password"] {
    margin: 30px;
    font-size: 48px;
    line-height: 56px;
    padding: 8px;
    width: 90%;
    height: 100%;
    width: 20rem;
    max-height: 62px;
  }
`;

const Label = styled.div`
  width: 100%;
  font-size: 48px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  margin: 20px;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  font-size: 48px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`;

const Button = styled.input`
  min-width: 248px;
  height: 60px;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
  margin: 0 32px;
  background: none;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: #0cdb92bd;
  }
`;

const CancelButton = styled(Button)`
  :hover {
    background: #e53935;
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #4fbe79;
  padding: 20px;
`;

const ErrorStyled = styled.div`
  font-size: 16px;
  color: #f60606;
`;

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
