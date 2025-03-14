import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import { Project } from '../types';

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

const SettingsCard = styled.div`
  background-color: var(--gray-dark);
  border-radius: 10px;
  padding: 20px;
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SettingsColumn = styled.div``;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: var(--gray-light);
`;

const ColorPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ColorInput = styled.input`
  width: 80%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: var(--gray-light);
`;

interface ColorPreviewProps {
  color: string;
}

const ColorPreview = styled.div<ColorPreviewProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.color || '#FFF'};
  border: 1px solid #ccc;
  cursor: pointer;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface StatusDotProps {
  active: boolean;
}

const StatusDot = styled.div<StatusDotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#4CAF50' : '#F44336'};
`;

const StyledButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background-color: #555;
  }
`;

const ProjectSettings: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  // Sample project data
  const project: Project = {
    id: 1,
    name: 'Client A',
    primaryColor: '000000',
    secondaryColor: 'FFFFFF',
    tertiaryColor: '737373',
    accentColor: '444444',
    font: 'Times New Roman',
    domain: 'www.example.com',
    status: 'Delivered',
    transferEmail: 'example@email.com'
  };
  
  return (
    <PageContainer>
      <HeaderBar>
        <Logo>Developer Platform</Logo>
        <MenuButton onClick={() => setMenuOpen(true)}>Menu</MenuButton>
      </HeaderBar>
      
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <ContentContainer>
        <Navigation activeTab="Project Settings" />
        
        <SettingsCard>
          <SettingsGrid>
            <SettingsColumn>
              <FormGroup>
                <Label>Project Name:</Label>
                <Input type="text" value={project.name} />
                <StyledButton style={{ marginTop: '5px' }}>Edit</StyledButton>
              </FormGroup>
              
              <FormGroup>
                <Label>Primary Color:</Label>
                <ColorPicker>
                  <ColorInput type="text" value={project.primaryColor} />
                  <ColorPreview color={`#${project.primaryColor}`} />
                </ColorPicker>
              </FormGroup>
              
              <FormGroup>
                <Label>Secondary Color:</Label>
                <ColorPicker>
                  <ColorInput type="text" value={project.secondaryColor} />
                  <ColorPreview color={`#${project.secondaryColor}`} />
                </ColorPicker>
              </FormGroup>
              
              <FormGroup>
                <Label>Tertiary Color:</Label>
                <ColorPicker>
                  <ColorInput type="text" value={project.tertiaryColor} />
                  <ColorPreview color={`#${project.tertiaryColor}`} />
                </ColorPicker>
              </FormGroup>
              
              <FormGroup>
                <Label>Accent Color:</Label>
                <ColorPicker>
                  <ColorInput type="text" value={project.accentColor} />
                  <ColorPreview color={`#${project.accentColor}`} />
                </ColorPicker>
              </FormGroup>
            </SettingsColumn>
            
            <SettingsColumn>
              <FormGroup>
                <Label>Font:</Label>
                <Input type="text" value={project.font} />
                <StyledButton style={{ marginTop: '5px' }}>Edit</StyledButton>
              </FormGroup>
              
              <FormGroup>
                <Label>Domain Name:</Label>
                <Input type="text" value={project.domain} />
                <StyledButton style={{ marginTop: '5px' }}>Edit</StyledButton>
              </FormGroup>
              
              <FormGroup>
                <Label>Status:</Label>
                <StatusIndicator>
                  <Input type="text" value={project.status} readOnly />
                  <StatusDot active={project.status === 'Delivered'} />
                </StatusIndicator>
              </FormGroup>
              
              <FormGroup>
                <Label>Transfer To:</Label>
                <Input type="email" value={project.transferEmail} />
                <StyledButton style={{ marginTop: '5px' }}>Edit</StyledButton>
              </FormGroup>
            </SettingsColumn>
          </SettingsGrid>
        </SettingsCard>
      </ContentContainer>
    </PageContainer>
  );
};

export default ProjectSettings;