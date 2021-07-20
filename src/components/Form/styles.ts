import styled, { css } from "styled-components";

interface PropsInput {
  isFocused?: boolean;
  error?: boolean;
}

export const Container = styled.form`
  width: 30%;
  height: 60rem;
  display: flex;
  flex-direction: column;
  padding: 3rem;

  background: #373737;
  border-radius: 10px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);

  @media (max-width: 916px) {
    width: 90%;
  }
`;

export const Header = styled.header`
  width: 100%;
`;

export const BoxInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    font-size: 18px;
    font-weight: border;
    color: #f26565;
    margin-top: 1rem;
  }
`;

export const Label = styled.label`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  cursor: pointer;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 36px;
  color: #fff;
`;

export const InputName = styled.input<PropsInput>`
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  margin-top: 1rem;
  padding-left: 1rem;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #f3ae29;
    `}

  ${(props) =>
    props.error &&
    css`
      border: 2px solid #f26565;
    `}
`;

export const InputEmail = styled.input<PropsInput>`
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  margin-top: 1rem;
  padding-left: 1rem;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #f3ae29;
    `}

  ${(props) =>
    props.error &&
    css`
      border: 2px solid #f26565;
    `}
`;

export const Button = styled.button`
  width: 100%;
  min-height: 5.6rem;
  border-radius: 1rem;
  background: #f3ae29;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  transition: background 0.2s;
  transition: color 0.2s;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    color: #f3ae29;
    background: #000;
  }
`;
