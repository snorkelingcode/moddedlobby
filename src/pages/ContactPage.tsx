import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import { ContactPageProps } from '../types';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: white;
  padding: 20px;
`;

const ContactCard = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 30px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  background-color: var(--gray-light);
  font-size: 1rem;
  
  &::placeholder {
    color: #999;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px;
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  background-color: var(--gray-light);
  min-height: 150px;
  font-size: 1rem;
  resize: vertical;
  
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  background-color: var(--accent-color);
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #e66c00;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: var(--accent-color);
  font-size: 24px;
  cursor: pointer;
`;

const ContactPage: React.FC<ContactPageProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ email, subject, message });
    alert('Message sent!');
    handleClose();
  };

  const handleClose = () => {
    // First try to use the onClose prop if provided
    if (onClose) {
      onClose();
    } else {
      // Otherwise navigate back to the home page
      navigate('/');
    }
  };

  return (
    <ContactContainer>
      <CloseButton onClick={handleClose}>X</CloseButton>
      
      <ContactCard>
        <ContactTitle>Contact Us:</ContactTitle>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormInput 
            type="email" 
            placeholder="Email:" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <FormInput 
            type="text" 
            placeholder="Subject:" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          
          <FormTextarea 
            placeholder="Enter your message..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          
          <SubmitButton type="submit">
            Send
          </SubmitButton>
        </ContactForm>
      </ContactCard>
    </ContactContainer>
  );
};

export default ContactPage;