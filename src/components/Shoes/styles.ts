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

export const CardShoes = styled.div`
  width: 353px;
  height: 519px;
  background: #f3ae29;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);

  @media (max-width: 916px) {
    width: 90%;
    height: 100%;
  }
`;

export const CardShoesHeader = styled.header`
  background: #fff;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
`;
export const CardShoesImage = styled.img`
  width: 100%;
`;
export const CardShoesName = styled.strong`
  margin: 2rem 0;
  font-size: 24px;
  font-weight: bold;
`;
export const CardShoesFooter = styled.p`
  width: 14.2rem;
  height: 5.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f53a3a;
  text-align: center;
  font-weight: bold;
  font-size: 3.6rem;
  color: #fff;
  border-radius: 5px;
  margin-left: 0px;
`;
