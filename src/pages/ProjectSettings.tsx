import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { Project } from '../types';

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

const ProjectSettings: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  // Sample project data
  const project: Project = {
    id: 1,
    name: 'Client A',
    primaryColor: '000000',
    secondaryColor: 'FFFFFF',
    tertiaryColor: '737373',
    accentColor: 'FF7700',
    font: 'Times New Roman',
    domain: 'www.example.com',
    status: 'Delivered',
    transferEmail: 'example@email.com'
  };
  
  return (
    <PageContainer>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <ContentContainer>
        <Navigation activeTab="Project Settings" />
        
        <SettingsCard>
          <SettingsGrid>
            <SettingsColumn>
              <FormGroup>
                <Label>Project Name:</Label>
                <Input type="text" value={project.name} />
                <Button icon="✏️" style={{ marginTop: '5px' }} />
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
                <Button icon="✏️" style={{ marginTop: '5px' }} />
              </FormGroup>
              
              <FormGroup>
                <Label>Domain Name:</Label>
                <Input type="text" value={project.domain} />
                <Button icon="✏️" style={{ marginTop: '5px' }} />
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
                <Button icon="✏️" style={{ marginTop: '5px' }} />
              </FormGroup>
            </SettingsColumn>
          </SettingsGrid>
        </SettingsCard>
      </ContentContainer>
    </PageContainer>
  );
};

export default ProjectSettings;