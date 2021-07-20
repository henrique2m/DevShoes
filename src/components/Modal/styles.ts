import styled, { css } from "styled-components";

interface ModalProps {
  toggleVisibility: boolean;
}

export const Container = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  display: flex;
  visibility: hidden;

  ${(props) =>
    props.toggleVisibility &&
    css`
      visibility: visible;
    `}

  background: rgba(243, 174, 41, 0.8);

  button {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 5.4rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  img {
    width: 30rem;
  }

  p {
    font-size: 32px;
    width: 90%;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    color: #fff;
  }
`;
