import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Menu from '../components/Menu';

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

const AICard = styled.div`
  background-color: var(--gray-dark);
  border-radius: 10px;
  padding: 20px;
`;

const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PreviewBox = styled.div`
  background-color: var(--gray-light);
  border-radius: 5px;
  height: 200px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const PreviewLabel = styled.div`
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

const PromptSection = styled.div`
  margin-top: 20px;
`;

const PromptInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: var(--gray-light);
  resize: none;
  margin-bottom: 10px;
  
  &::placeholder {
    color: #999;
  }
`;

const AddButton = styled.button`
  position: relative;
  float: right;
  margin-top: -40px;
  margin-right: 10px;
  background-color: #444;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  
  &:hover {
    background-color: #555;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface ActionButtonProps {
  primary?: boolean;
}

const ActionButton = styled.button<ActionButtonProps>`
  background-color: ${props => props.primary ? '#444' : '#333'};
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background-color: ${props => props.primary ? '#555' : '#444'};
  }
`;

const AIReformat: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  
  return (
    <PageContainer>
      <HeaderBar>
        <Logo>Developer Platform</Logo>
        <MenuButton onClick={() => setMenuOpen(true)}>Menu</MenuButton>
      </HeaderBar>
      
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <ContentContainer>
        <Navigation activeTab="AI Reformat" />
        
        <AICard>
          <PreviewContainer>
            <div>
              <PreviewLabel>Website Preview</PreviewLabel>
              <PreviewBox>
                <p>Original site preview will appear here</p>
              </PreviewBox>
            </div>
            <div>
              <PreviewLabel>Website Preview</PreviewLabel>
              <PreviewBox>
                <p>AI reformatted site preview will appear here</p>
              </PreviewBox>
            </div>
          </PreviewContainer>
          
          <PromptSection>
            <PreviewLabel>Prompt:</PreviewLabel>
            <PromptInput 
              placeholder="Enter your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <AddButton>+</AddButton>
          </PromptSection>
          
          <ActionButtons>
            <ActionButton>Import Project</ActionButton>
            <ActionButton primary>Apply to Project</ActionButton>
            <ActionButton>Export Code</ActionButton>
          </ActionButtons>
        </AICard>
      </ContentContainer>
    </PageContainer>
  );
};

export default AIReformat;