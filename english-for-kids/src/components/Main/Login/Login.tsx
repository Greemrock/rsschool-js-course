import styled from "styled-components";

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

  input {
    margin: 30px;
    font-size: 48px;
    line-height: 56px;
    padding: 8px;
    width: 90%;
    height: 100%;
    max-width: 556px;
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

const Button = styled.button`
  width: 248px;
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

interface IPopup {
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

export const Login: React.FC<IPopup> = ({ statusModal, setModal }) => {
  const closeModal = () => {
    fixed(false);
    setModal(false);
  };
  return (
    <Bg stateModal={statusModal}>
      <Modal>
        <Form id="login-form">
          <Label>Login</Label>
          <input placeholder="Login" required type="text" name="username" />
          <input
            placeholder="Password"
            required
            type="password"
            name="password"
          />
          <div className="error-message" />
          <Container>
            <CancelButton type="button" onClick={() => closeModal()}>
              Cancel
            </CancelButton>
            <Button type="submit">Login</Button>
          </Container>
        </Form>
      </Modal>
    </Bg>
  );
};
