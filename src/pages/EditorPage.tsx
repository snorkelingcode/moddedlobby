import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import { ModuleCategory } from '../types';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const EditorPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid #ccc;
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
`;

const PreviewPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const PanelHeader = styled.div`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PanelTitle = styled.h3`
  color: white;
  margin: 0;
`;

const PanelContent = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const ModulesContainer = styled.div`
  margin-top: 20px;
`;

const ModuleSection = styled.div`
  margin-bottom: 20px;
`;

const ModuleTitle = styled.div`
  background-color: #333;
  color: white;
  padding: 8px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Module = styled.div`
  background-color: var(--gray-light);
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background-color: var(--gray-medium);
  }
`;

const HeaderSection = styled.div`
  background-color: #333;
  padding: 20px;
  color: white;
`;

const ContentSection = styled.div`
  padding: 20px;
`;

const FooterButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;

const TextEditor = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 15px;
  }
`;

const SitePreview = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const EditorPage = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  // Sample module categories
  const moduleCategories: ModuleCategory[] = [
    {
      title: 'Buttons and Mods',
      modules: ['B1', 'B2', 'B3', 'B4', 'FAQ', 'CU']
    },
    {
      title: 'Text Customization Modules',
      modules: ['PC', 'SC', 'TC', 'AC', 'TF', 'SH']
    },
    {
      title: 'Text Modules',
      modules: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
    },
    {
      title: 'Main Customization',
      modules: ['NB', 'MB', 'H BD', 'F', 'SC', 'SF']
    }
  ];
  
  return (
    <PageContainer>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <EditorContainer>
        <EditorPanel>
          <PanelHeader>
            <PanelTitle>Header 1</PanelTitle>
            <Button icon="✏️" />
          </PanelHeader>
          <PanelContent>
            <TextEditor>
              <h1>Header 1</h1>
              <p>Header 8</p>
              
              <h3>Header 3</h3>
              <p>Large Paragraph</p>
            </TextEditor>
            
            <ModulesContainer>
              {moduleCategories.map((category, index) => (
                <ModuleSection key={index}>
                  <ModuleTitle>
                    <span>Developer Drag & Drop Modules</span>
                    <span>{category.title}</span>
                  </ModuleTitle>
                  <ModuleGrid>
                    {category.modules.map((module, mIndex) => (
                      <Module key={mIndex}>
                        {module}
                      </Module>
                    ))}
                  </ModuleGrid>
                </ModuleSection>
              ))}
            </ModulesContainer>
            
            <FooterButton>Industry Standard Format</FooterButton>
          </PanelContent>
        </EditorPanel>
        
        <PreviewPanel>
          <PanelHeader>
            <PanelTitle>Welcome!</PanelTitle>
            <Button icon="✏️" />
          </PanelHeader>
          <PanelContent>
            <HeaderSection>
              <h1>Welcome!</h1>
              <p>Our goal is to be your favorite brand for building websites!</p>
            </HeaderSection>
            
            <ContentSection>
              <h2>Features</h2>
              <p>Our drag and drop modules save countless hours when building the UI for a website. If you're simply building a landing page for a client, you have come to the right place! We provide developers with the tools to create websites quickly, while also having the ability to manage the codebase themselves for additional customization and power!</p>
              
              {/* Preview of the site in small format */}
              <SitePreview>
                <PreviewGrid>
                  <div>
                    <h4>Header 1</h4>
                  </div>
                  <div>
                    <h4>Welcome!</h4>
                    <small>Our goal is to be your favorite brand for building websites!</small>
                  </div>
                  <div>
                    <h4>Header 3</h4>
                  </div>
                  <div>
                    <h4>Features</h4>
                  </div>
                </PreviewGrid>
              </SitePreview>
            </ContentSection>
            
            <FooterButton>Edit</FooterButton>
          </PanelContent>
        </PreviewPanel>
      </EditorContainer>
    </PageContainer>
  );
};

export default EditorPage;