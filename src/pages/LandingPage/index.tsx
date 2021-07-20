import React from 'react';
import Form from '../../components/Form';
import Feedback from '../../components/Feedback';
import Shoes from '../../components/Shoes';
import {
    Container, 
    Header, 
    Logo, 
    Slogan, 
    Content, 
    BlackFriday, 
    BoxEndLogo,
    Footer,
    Network,
    LinkedIn,
    GitHub,
    Instagram,
    Author,

  } from './styles';
import logoDevShoesBlack from '../../assets/devshoesBlack.svg';
import logoDevShoesColor from '../../assets/devshoesColor.svg';
import logoBlackFriday from '../../assets/blackFriday.svg';
import instagram from '../../assets/Instagram.png';
import linkedin from '../../assets/LinkedIn.png';
import github from '../../assets/GitHub.png';


const LandingPage = () =>  {
 
  return (
    <Container>
      <Header>
        <Logo src={logoDevShoesBlack}></Logo>
        <Slogan>Solucione bugs com estilo</Slogan>
      </Header>

      <Content>
        <BlackFriday src={logoBlackFriday}/>
        <Form />
      </Content>

      <Feedback />
      <Shoes />

      <BoxEndLogo>
          <Logo src={logoDevShoesColor}></Logo>
      </BoxEndLogo>

     <Footer>
       <Network>
         <LinkedIn
          href="https://www.linkedin.com/in/henrique-moreira-51699618b/" 
          target="_blank"
          >
          <img src={linkedin} alt="Instagram"/>
         </LinkedIn>
         <GitHub href="https://github.com/henrique2m" target="_blank">  
          <img src={github} alt="github"/>
         </GitHub>
         <Instagram 
          href="https://www.instagram.com/henrique_moreira2/" 
          target="_blank"
          >
          <img src={instagram} alt="instagram"/>
         </Instagram>
       </Network>
       <Author>
         Henrique Moreira
       </Author>
     </Footer>
     
    </Container>
  );
}

export default LandingPage;
