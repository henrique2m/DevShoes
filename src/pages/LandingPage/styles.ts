import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100vw;
  height: 80rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f3ae29;
  background-size: contain;
`;

export const Logo = styled.img`
  width: 40%;
  margin: 6.4rem 0;

  @media (max-width: 916px) {
    width: 60%;
  }
`;

export const Slogan = styled.h3`
  width: 90%;
  text-align: center;
  color: #fff;
  font-size: 72px;
  font-family: "Roboto";
  font-weight: bold;
  margin-top: -2rem;

  @media (max-width: 916px) {
    font-size: 48px;
  }
`;

export const Content = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  margin-top: -40rem;

  @media (max-width: 916px) {
    flex-direction: column;
    align-items: center;
    margin-top: -50rem;
  }
`;

export const BlackFriday = styled.img`
  width: 50%;

  @media (max-width: 916px) {
    width: 90%;
    margin: 5.4rem 0;
  }
`;

export const BoxEndLogo = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  background: #373737;
  background-size: contain;
  background-position: bottom;

  @media (max-width: 916px) {
    flex-direction: column;
  }
`;

export const Network = styled.div`
  @keyframes toTop {
    to {
      margin-bottom: 0;
    }

    from {
      margin-bottom: 1rem;
    }
  }

  a img:hover {
    animation: toTop 0.2s ease-in-out;
  }
`;

export const LinkedIn = styled.a``;
export const GitHub = styled.a``;
export const Instagram = styled.a``;

export const Author = styled.strong`
  font-size: 32px;
  height: 72px;
  display: flex;
  align-items: center;
  color: #fff;
  border-left: 5px solid #f3ae29;
  padding-left: 1rem;

  @media (max-width: 916px) {
    border-left: 0;
    font-size: 24px;
  }
`;
