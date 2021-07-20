import React, { useState, useCallback, useMemo} from 'react';

import { Container  } from './styles';
import blackFriday from '../../assets/blackFriday.svg'

interface UserProps {
  name: string;
  email: string;
}

interface ModalProps {
  toggleVisibility: boolean;
}

const Modal = ( { toggleVisibility = false } : ModalProps) => {
  const [ user, setUser] = useState<UserProps>({name: '', email: ''});
  const dataUser = localStorage.getItem('user');
  const [visibility, setVisibility ] = useState(toggleVisibility);

  const handleCloseModal = useCallback(() => {
    localStorage.removeItem('user');
    setVisibility(false);
  },[]);

  useMemo(() => {
     const handleUser = () => {
        if(!dataUser) return;

        setVisibility(true);

        setUser(JSON.parse(dataUser));
     }

     handleUser();
   },[dataUser]);

  return(
    <Container toggleVisibility={visibility}>
      <button onClick={handleCloseModal}>x</button>
      <img src={blackFriday} alt="blackFriday" />
      <p>
        Olá {user.name}, sempre enviaremos a você as melhores promoções em primeira mão.
      </p>
    </Container>
  )
};

export default Modal;