import React from 'react';

import {
  Container,
  CardShoes,
  CardShoesHeader,
  CardShoesImage,
  CardShoesName,
  CardShoesFooter, 
} from './styles';

import api from '../../database';

const Shoes = () => {
  const { shoes } = api;

  return(
    <Container>
      {shoes.map((shoes) => (
        <CardShoes key={shoes.id}>
          <CardShoesHeader>
            <CardShoesImage src={shoes.image}/>
          </CardShoesHeader>

          <CardShoesName>{shoes.name} </CardShoesName>
          <CardShoesFooter>
          {shoes.promotion}
          </CardShoesFooter>
        </CardShoes>
      ))}
    </Container>
  )
}

export default Shoes;