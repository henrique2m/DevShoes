import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 916px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardFeedback = styled.div`
  width: 40%;
  min-height: 462px;
  background: #373737;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);

  @media (max-width: 916px) {
    width: 90%;
  }
`;

export const AvatarUserFeedback = styled.img`
  width: 15rem;
  height: 15rem;
  border: 5px solid #f3ae29;
  border-radius: 50%;
`;

export const TextUserFeedBack = styled.p`
  width: 100%;
  font-size: 36px;
  text-align: center;
  color: #fff;
  margin-top: 2.4rem;
`;
