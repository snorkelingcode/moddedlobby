import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../components/Menu';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #222;
  color: white;
  text-align: center;
  padding: 20px;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 8px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    color: #aaa;
  }
`;

const IntroContent = styled.div`
  max-width: 800px;
  width: 100%;
  margin-top: var(--header-height);
`;

const IntroHeading = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  margin-bottom: 20px;
`;

const IntroSubheading = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 40px;
`;

const IntroDescription = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const ActionButton = styled(Link)`
  display: block;
  background-color: #444;
  color: white;
  padding: 15px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: center;
  
  &:hover {
    background-color: #555;
  }
`;

const Introduction: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  return (
    <IntroContainer>
      <MenuBar>
        <Logo>Developer Platform</Logo>
        <MenuButton onClick={() => setMenuOpen(true)}>Menu</MenuButton>
      </MenuBar>
      
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <IntroContent>
        <IntroHeading>We aim to synchronize</IntroHeading>
        <IntroSubheading>developers and their clients.</IntroSubheading>
        
        <IntroDescription>
          Our sandbox allows developers to build powerful sites, then give their client's the ability update content as needed.
        </IntroDescription>
        
        <ActionButtons>
          <ActionButton to="/developer">
            Developer Login
          </ActionButton>
          
          <ActionButton to="/client">
            Client Portal
          </ActionButton>
        </ActionButtons>
      </IntroContent>
    </IntroContainer>
  );
};

export default Introduction;