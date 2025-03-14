import React from 'react';
import styled from 'styled-components';

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

const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const MenuButton = styled.button`
  color: white;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 4px;
  background: none;
  cursor: pointer;
  border: none;
  
  &:hover {
    color: var(--accent-color);
  }
`;

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <HeaderContainer>
      <Logo>Developer Platform</Logo>
      <MenuButton onClick={onMenuClick}>Menu</MenuButton>
    </HeaderContainer>
  );
};

export default Header;