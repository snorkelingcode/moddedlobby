import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { DashboardProps, Project } from '../types';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
`;

const ProjectActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Dashboard: React.FC<DashboardProps> = ({ userType = 'developer' }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  // Sample project data
  const projects: Project[] = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' },
    { id: 3, name: 'Client C' },
  ];
  
  return (
    <PageContainer>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
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
                <Button fullWidth as={Link} to="/project-settings">Project Settings</Button>
                <Button 
                  fullWidth 
                  as={Link} 
                  to={userType === 'developer' ? '/editor' : '/sandbox'}
                >
                  {userType === 'developer' ? 'Editor' : 'Sandbox'}
                </Button>
              </ProjectActions>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentContainer>
    </PageContainer>
  );
};

export default Dashboard;