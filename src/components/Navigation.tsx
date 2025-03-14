import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationProps } from '../types';

const NavigationContainer = styled.nav`
  width: 100%;
  background-color: var(--gray-medium);
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  padding: 5px 10px;
  text-align: center;
  color: var(--primary-color);
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  background-color: ${props => props.active ? 'var(--gray-dark)' : 'transparent'};
  
  @media (max-width: 768px) {
    flex: 1 0 33.333%;
    margin-bottom: 5px;
  }
`;

const Navigation: React.FC<NavigationProps> = ({ activeTab }) => {
  const tabs = [
    { name: 'Projects', path: '/dashboard' },
    { name: 'Project Settings', path: '/project-settings' },
    { name: 'Profile Settings', path: '/profile-settings' },
    { name: 'AI Reformat', path: '/ai-reformat' },
    { name: 'Logout', path: '/' }
  ];

  return (
    <NavigationContainer>
      <NavList>
        {tabs.map((tab) => (
          <NavItem key={tab.name} active={activeTab === tab.name}>
            <Link to={tab.path}>{tab.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </NavigationContainer>
  );
};

export default Navigation;