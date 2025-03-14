import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: white;
  text-align: center;
  padding: 20px;
`;

const IntroContent = styled.div`
  max-width: 800px;
  width: 100%;
`;

const IntroHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroSubheading = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const IntroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ActionButton = styled(Button)`
  background-color: var(--accent-color);
  color: white;
  padding: 12px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #e66c00;
  }
`;

const Introduction: React.FC = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroHeading>We aim to synchronize</IntroHeading>
        <IntroSubheading>developers and their clients.</IntroSubheading>
        
        <IntroDescription>
          Our sandbox allows developers to build powerful sites, then give their client's the ability update content as needed.
        </IntroDescription>
        
        <div>
          <ActionButton as={Link} to="/developer">
            Welcome to the developer page! Sign in with your developer key.
          </ActionButton>
        </div>
        
        <div>
          <ActionButton as={Link} to="/client">
            Welcome to the client page! Use the editor to get an idea of how the site works from a client's prospective!
          </ActionButton>
        </div>
      </IntroContent>
    </IntroContainer>
  );
};

export default Introduction;