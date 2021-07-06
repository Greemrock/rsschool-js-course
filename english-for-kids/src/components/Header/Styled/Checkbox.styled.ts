import styled from "styled-components";

export const SwitchButton = styled.span`
  position: relative;
  top: 2px;
  left: 2px;
  width: 36px;
  height: 36px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.4);
`;

export const SwitchLabel = styled.label<{ statusCheckbox: boolean }>`
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.5rem;
  width: 95px;
  height: 40px;
  box-shadow: inset 0 2px 7px 0 rgba(0, 0, 0, 0.3);
  background: ${({ statusCheckbox }) =>
    !statusCheckbox ? "#dcdcdc" : "linear-gradient(40deg,#00bf82,#0099ae)"};
  border-radius: 80px;
  transition: background-color 0.2s;
  z-index: 20;

  :after,
  :before {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }

  :after {
    content: "Play";
    position: relative;
    right: 15px;
    opacity: ${({ statusCheckbox }) => (!statusCheckbox ? "1" : "0")};
    z-index: 20;
  }

  :before {
    content: "Train";
    position: relative;
    right: -10px;
    opacity: ${({ statusCheckbox }) => (!statusCheckbox ? "0" : "1")};
    z-index: 20;
  }

  ${SwitchButton} {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
  }

  :active ${SwitchButton} {
    width: 60px;
  }
`;

export const SwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + ${SwitchLabel} ${SwitchButton} {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

export const StyledCheckbox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 0;
`;
