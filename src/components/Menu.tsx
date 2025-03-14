import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--accent-color);
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const MenuItem = styled.li`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    color: var(--accent-color);
    transform: scale(1.05);
  }
`;

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'DEVELOPERS', path: '/developer' },
    { label: 'CLIENTS', path: '/client' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'DASHBOARD', path: '/dashboard' },
  ];

  return (
    <MenuOverlay>
      <CloseButton onClick={onClose}>X</CloseButton>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <Link to={item.path} onClick={onClose}>
              {item.label}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </MenuOverlay>
  );
};

export default Menu;