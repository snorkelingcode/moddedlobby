import React from 'react';
import styled from 'styled-components';
import { HeaderProps } from '../types';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  width: 100%;
  background-color: #333;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const MenuButton = styled.button`
  color: white;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 4px;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  color: var(--accent-color);
  font-size: 24px;
  font-weight: bold;
  background: none;
  cursor: pointer;
`;

const Header: React.FC<HeaderProps> = ({ showMenu, setShowMenu }) => {
  return (
    <HeaderContainer>
      {showMenu ? (
        <CloseButton onClick={() => setShowMenu(false)}>X</CloseButton>
      ) : (
        <MenuButton onClick={() => setShowMenu(true)}>Menu</MenuButton>
      )}
    </HeaderContainer>
  );
};

export default Header;