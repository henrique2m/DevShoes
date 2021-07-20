import React, { FormEvent, useState, useCallback } from 'react';
import Modal from '../Modal';

import { 
  Container, 
  Header, 
  Title,
  BoxInput,
  Label, 
  InputName,
  InputEmail, 
  Button, 
} from './styles';

const Form = () => {
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [isFocusedInputEmail, setIsFocusedInputEmail] = useState(false);
  const [isFocusedInputName, setIsFocusedInputName ] = useState(false);
  const [nameError , setNameError] = useState(false);
  const [emailError , setEmailError] = useState(false);
  const [toggleVisibilityModal , setToggleVisibilityModal] = useState(false);

  const handleInputFocus  = useCallback(( event ) => {
    if(event.target.id === "name") return setIsFocusedInputName(true);
    
    setIsFocusedInputEmail(true);
  }, []);

  const handleInputBlur  = useCallback((event) => {
    if(event.target.id === "name") return setIsFocusedInputName(false);

    setIsFocusedInputEmail(false);
  }, []);

  const requestForm =  useCallback((event: FormEvent) => {
    event.preventDefault();

    name === '' ? setNameError(true) : setNameError(false);
    email === '' ? setEmailError(true) : setEmailError(false);

    if(name === '' || email === '') return;

    const dataUser = { 
      name: name,
      email: email,
    }

    setToggleVisibilityModal(true); 

    localStorage.setItem('user', JSON.stringify(dataUser));
    
    setName('');
    setEmail('');
  }, [email, name]);

  return(
    <>
      <Container onSubmit={requestForm}>
        <Header>
          <Title>
            Receba as melhores promoções em primeira mão
          </Title>
        </Header>
        <BoxInput>
          <div>
            <Label htmlFor="name">Nome*</Label>
            <InputName
              placeholder="Seu primeiro nome" name="name" id="name"
              value={name}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              isFocused = {isFocusedInputName}
              onChange = {(event) => setName(event.target.value)}
              error={nameError}
            />
            {nameError && (<span>O campo Nome é obrigatório.</span>)}
          </div>
          <div>
            <Label htmlFor="email">Email*</Label>
            <InputEmail 
              placeholder="Seu melhor email" name="email" id="email"
              value={email}
              onFocus={handleInputFocus}
              isFocused = {isFocusedInputEmail}
              onBlur={handleInputBlur}
              onChange = {(event) => setEmail(event.target.value)}
              error={emailError}
            />
            {emailError && (<span>O campo Email é obrigatório.</span>)}
          </div>
          <Button type="submit">QUERO SER O PRIMEIRO</Button>
        </BoxInput>
      </Container>

      {toggleVisibilityModal &&  
        <Modal toggleVisibility={toggleVisibilityModal}/>}
    </>
  )
}

export default Form;