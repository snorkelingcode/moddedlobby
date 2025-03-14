import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import { MenuPageProps } from '../types';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const MenuContent = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuItem = styled.li`
  font-size: 2rem;
  color: var(--accent-color);
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
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

interface MenuItemType {
  label: string;
  path: string;
}

const MenuPage = ({ onClose }: MenuPageProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (onClose) onClose();
  };

  const menuItems: MenuItemType[] = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'DEVELOPERS', path: '/developer' },
    { label: 'CLIENTS', path: '/client' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'SIGN-IN', path: '/dashboard' },
  ];

  return (
    <MenuContainer>
      <CloseButton onClick={onClose || (() => navigate('/'))}>X</CloseButton>
      
      <MenuContent>
        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={() => handleNavigation(item.path)}>
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </MenuContent>
    </MenuContainer>
  );
};

export default MenuPage;