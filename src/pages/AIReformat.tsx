import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';

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
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  background-color: var(--gray-light);
  resize: none;
  margin-bottom: 10px;
  
  &::placeholder {
    color: #999;
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

const AIReformat = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  
  return (
    <PageContainer>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
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
            <Button 
              icon="➕" 
              style={{ position: 'relative', float: 'right', marginTop: '-40px', marginRight: '10px' }}
            />
          </PromptSection>
          
          <ActionButtons>
            <Button>Import Project</Button>
            <Button primary>Apply to Project</Button>
            <Button>Export Code</Button>
          </ActionButtons>
        </AICard>
      </ContentContainer>
    </PageContainer>
  );
};

export default AIReformat;