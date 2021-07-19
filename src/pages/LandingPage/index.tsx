import React, { FormEvent, useState } from 'react';

import {
    Container, 
    Header, 
    Logo, 
    Slogan, 
    Content, 
    BlackFriday, 
    Form, 
    FormHeader, 
    FormTitle,
    BoxInput,
    FormLabel, 
    FormInput,  
    FormSubmit,
    BoxFeedback,
    CardFeedback,
    AvatarUserFeedback,
    TextUserFeedBack,
    BoxShoes,
    CardShoes,
    CardShoesHeader,
    CardShoesImage,
    CardShoesName,
    CardShoesFooter,
    BoxEndLogo,
    Footer,
  } from './styles';

import logoDevShoesBlack from '../../assets/devshoesBlack.svg';
import logoDevShoesColor from '../../assets/devshoesColor.svg';
import logoBlackFriday from '../../assets/blackFriday.svg';
import avatar from '../../assets/avatar.jpg';
import reactShoes from '../../assets/reactShoes.png';



const LandingPage = () =>  {
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');

  const requestForm =  (event: FormEvent) => {
    event.preventDefault();

    const dataUser = { 
      name: name,
      email: email,
    }

    localStorage.setItem('user', JSON.stringify(dataUser));
  }

  return (
    <Container>
      <Header>
        <Logo src={logoDevShoesBlack}></Logo>
        <Slogan>Resolva bugs com estilo</Slogan>
      </Header>

      <Content>
        <BlackFriday src={logoBlackFriday}/>
        <Form onSubmit={requestForm}>
          <FormHeader>
            <FormTitle>
            Receba as melhores promoções em primeira mão
            </FormTitle>
          </FormHeader>
          <BoxInput>
            <div>
              <FormLabel htmlFor="name">Nome*</FormLabel>
              <FormInput 
                placeholder="Seu primeiro nome" name="name"
                value={name}
                onChange = {(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <FormLabel htmlFor="email">Email*</FormLabel>
              <FormInput 
                placeholder="Seu melhor email" name="email"
                value={email}
                onChange = {(event) => setEmail(event.target.value)}
              />
            </div>
            <FormSubmit type="submit">QUERO SER O PRIMEIRO</FormSubmit>
          </BoxInput>
  
        </Form>
      </Content>

      <BoxFeedback>
        <CardFeedback>
          <AvatarUserFeedback src={avatar} />
          <TextUserFeedBack>
            "Comprei o modelo React Shoes e não me arrependo, 
            super confortável e a entrega foi rápida"
          </TextUserFeedBack>
        </CardFeedback>

        <CardFeedback>
          <AvatarUserFeedback src={avatar}/>
          <TextUserFeedBack>
            "Comprei o modelo React Shoes e não me arrependo, 
            super confortável e a entrega foi rápida"
          </TextUserFeedBack>
        </CardFeedback>
      </BoxFeedback>


      <BoxShoes>
        <CardShoes>
          <CardShoesHeader>
            <CardShoesImage src={reactShoes}/>
          </CardShoesHeader>

          <CardShoesName>Tênis Git Push --Force </CardShoesName>
          <CardShoesFooter>
            -50%
          </CardShoesFooter>
        </CardShoes>

        <CardShoes>
          <CardShoesHeader>
            <CardShoesImage src={reactShoes}/>
          </CardShoesHeader>

          <CardShoesName>Tênis Git Push --Force </CardShoesName>
          <CardShoesFooter>
            -50%
          </CardShoesFooter>

        </CardShoes>

        <CardShoes>
          <CardShoesHeader>
            <CardShoesImage src={reactShoes}/>
          </CardShoesHeader>

          <CardShoesName>Tênis Git Push --Force </CardShoesName>
          <CardShoesFooter>
            -50%
          </CardShoesFooter>

        </CardShoes>
      </BoxShoes>

      <BoxEndLogo>
          <Logo src={logoDevShoesColor}></Logo>
      </BoxEndLogo>

     <Footer />
    </Container>

  );
}

export default LandingPage;
