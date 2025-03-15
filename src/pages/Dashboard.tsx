import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import { DashboardProps, Project } from '../types';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderBar = styled.div`
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
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #aaa;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-dark);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const ProjectPreview = styled.div`
  background-color: var(--gray-light);
  height: 180px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const PreviewContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 5px;
  height: 100%;
  
  h3 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
`;

const ProjectTitle = styled.div`
  padding: 10px;
  color: white;
  font-weight: bold;
`;

const ProjectActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const ActionButton = styled(Link)`
  display: block;
  background-color: #444;
  color: white;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: center;
  
  &:hover {
    background-color: #555;
  }
`;

const Dashboard: React.FC<DashboardProps> = ({ userType = 'developer' }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  // Sample project data
  const projects: Project[] = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' },
    { id: 3, name: 'Client C' },
  ];
  
  return (
    <PageContainer>
      <HeaderBar>
        <Logo>Halotab</Logo>
        <MenuButton onClick={() => setMenuOpen(true)}>Menu</MenuButton>
      </HeaderBar>
      
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <ContentContainer>
        <Navigation activeTab="Projects" />
        
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectPreview>
                <PreviewContent>
                  <div>
                    <h3>Header 1</h3>
                    <p>Header 8</p>
                  </div>
                  <div>
                    <h3>Welcome!</h3>
                    <p>Our goal is to be your favorite brand for building websites!</p>
                  </div>
                  <div>
                    <h3>Header 3</h3>
                    <p>Large Paragraph</p>
                  </div>
                  <div>
                    <h3>Features</h3>
                    <p>Our drag and drop modules save countless hours when building...</p>
                  </div>
                  <div>
                    <small>Developer Drag & Drop Modules</small>
                  </div>
                </PreviewContent>
              </ProjectPreview>
              
              <ProjectTitle>{project.name}</ProjectTitle>
              
              <ProjectActions>
                <ActionButton to="/project-settings">Project Settings</ActionButton>
                <ActionButton to={userType === 'developer' ? '/editor' : '/sandbox'}>
                  {userType === 'developer' ? 'Editor' : 'Sandbox'}
                </ActionButton>
              </ProjectActions>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentContainer>
    </PageContainer>
  );
};

export default Dashboard;