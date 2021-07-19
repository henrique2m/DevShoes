import styled from "styled-components";
import backgroundHeader from "../../assets/backgroundHeader.svg";
import backgroundFooter from "../../assets/backgroundFooter.svg";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100vw;
  height: 1205px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${backgroundHeader}) no-repeat;
  background-size: contain;
`;

export const Logo = styled.img`
  width: 60rem;
  margin-top: 146px;
`;

export const Slogan = styled.h3`
  color: #fff;
  font-size: 72px;
  font-family: "Roboto";
  font-weight: bold;
  margin-top: 88px;
`;

export const Content = styled.div`
  width: 100vw;
  justify-content: space-evenly;
  display: flex;
  margin-top: -65rem;
`;

export const BoxBlackFriday = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlackFriday = styled.img`
  width: 644px;
`;

export const Form = styled.form`
  width: 452px;
  height: 685px;

  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  padding: 3rem;

  background: #373737;
  border-radius: 10px;
`;

export const FormHeader = styled.header`
  width: 100%;
`;

export const BoxInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const FormLabel = styled.label`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff; ;
`;

export const FormTitle = styled.h4`
  font-weight: bold;
  font-size: 36px;
  color: #fff;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  margin-top: 1rem;
  padding-left: 1rem;
`;

export const FormSubmit = styled.button`
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  background: #f3ae29;
  color: #fff;
  font-weight: bold;
  font-size: 26px;
  transition: background 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: #f3ae29;
    background: #000;
  }
`;

export const BoxFeedback = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`;

export const CardFeedback = styled.div`
  width: 540px;
  height: 462px;
  background: #373737;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
  padding: 3rem;
  border-radius: 10px;
`;

export const AvatarUserFeedback = styled.img`
  width: 15rem;
  height: 15rem;
  border: 5px solid #f3ae29;
  border-radius: 50%;
`;

export const TextUserFeedBack = styled.p`
  font-size: 36px;
  text-align: center;
  color: #fff;
`;

export const BoxShoes = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`;

export const CardShoes = styled.div`
  width: 353px;
  height: 519px;
  background: #f3ae29;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
  padding: 3rem;
  border-radius: 10px;
`;

export const CardShoesHeader = styled.header``;
export const CardShoesImage = styled.img`
  width: 100%;
`;
export const CardShoesName = styled.strong``;
export const CardShoesFooter = styled.p``;

export const BoxEndLogo = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
`;

export const Footer = styled.div`
  width: 100%;
  height: 414px;
  background: url(${backgroundFooter}) no-repeat;
  background-size: contain;
  background-position: bottom;
`;
