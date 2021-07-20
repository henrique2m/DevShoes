import React from 'react'

import api from '../../database'

import { 
  Container,
  CardFeedback,
  AvatarUserFeedback,
  TextUserFeedBack
} from './styles';

const Feedback = () => {
  const { feedbacks } = api;

  return (
    <Container>
        {feedbacks.map((feedback) => (
        <CardFeedback key={feedback.id}>
          <AvatarUserFeedback src={feedback.userAvatar} />
          <TextUserFeedBack>
           {feedback.message}
          </TextUserFeedBack>
        </CardFeedback>
        ))}
    </Container>
  )
}

export default Feedback;