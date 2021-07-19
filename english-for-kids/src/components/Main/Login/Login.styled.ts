import styled from "styled-components";

export const Bg = styled.div<{ stateModal: boolean }>`
  display: ${({ stateModal }) => (stateModal ? "flex" : "none")};
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #2a2a2ac2;
  z-index: 3;
`;

export const Modal = styled.div`
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

export const Label = styled.div`
  width: 100%;
  font-size: 48px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  margin: 20px;
`;

export const Form = styled.form`
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

export const Button = styled.input`
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

export const CancelButton = styled(Button)`
  :hover {
    background: #e53935;
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #4fbe79;
  padding: 20px;
`;

export const ErrorStyled = styled.div`
  font-size: 16px;
  color: #f60606;
`;
