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

const PreviewPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid #ccc;
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
`;

const EditorPanel = styled.div`
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

const EditableContent = styled.div`
  [contenteditable="true"] {
    padding: 5px;
    border: 1px dashed transparent;
    
    &:hover, &:focus {
      border: 1px dashed #ccc;
      outline: none;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 15px;
  }
`;

const InstructionText = styled.div`
  background-color: #f0f8ff;
  border: 1px solid #add8e6;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  font-style: italic;
  
  span {
    font-weight: bold;
    color: var(--accent-color);
  }
`;

const EditorStructure = styled.div`
  h1, h2, h3, h4, h5, h6 {
    background-color: var(--gray-light);
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 3px;
    font-size: 0.9rem;
    color: #555;
    position: relative;
  }
  
  h1::before, h2::before, h3::before, h4::before, h5::before, h6::before {
    content: attr(data-type);
    position: absolute;
    top: 0;
    right: 5px;
    font-size: 10px;
    color: #777;
  }
  
  p {
    background-color: var(--gray-light);
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 3px;
    min-height: 30px;
    position: relative;
    font-size: 0.8rem;
    color: #666;
  }
  
  p::before {
    content: 'Paragraph';
    position: absolute;
    top: 2px;
    right: 5px;
    font-size: 10px;
    color: #777;
  }
`;

const DeveloperInstructionText = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  font-style: italic;
  font-size: 0.9rem;
  color: #555;
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
        {/* Left side - Preview Panel (editable by guest users) */}
        <PreviewPanel>
          <PanelHeader>
            <PanelTitle>Website Preview</PanelTitle>
            <Button icon="✏️" />
          </PanelHeader>
          <PanelContent>
            <InstructionText>
              <span>Welcome to the interactive website editor!</span> This panel shows how a website would look to visitors. <span>Click on any text to edit it</span> and see your changes immediately. This demonstrates how clients can easily update their website content.
            </InstructionText>
            
            <EditableContent>
              <HeaderSection>
                <h1 contentEditable="true">Welcome to Our Platform</h1>
                <p contentEditable="true">Our goal is to be your favorite tool for building amazing websites!</p>
              </HeaderSection>
              
              <ContentSection>
                <h2 contentEditable="true">About Us</h2>
                <p contentEditable="true">We're a team of passionate developers and designers dedicated to creating the best web experience for both developers and their clients. Our platform bridges the gap between technical capabilities and user-friendly interfaces.</p>
                
                <h2 contentEditable="true">Key Features</h2>
                <p contentEditable="true">Our drag and drop modules save countless hours when building websites. Whether you're creating a landing page or a complex web application, we provide all the tools you need to succeed. Edit this text to see how easy content management can be!</p>
                
                <h3 contentEditable="true">Why Choose Us?</h3>
                <p contentEditable="true">• Intuitive editing interface<br/>• Developer-friendly tools<br/>• Client-focused features<br/>• Regular updates and improvements<br/>• Dedicated support team</p>
              </ContentSection>
            </EditableContent>
            
            <FooterButton>Save Changes</FooterButton>
          </PanelContent>
        </PreviewPanel>
        
        {/* Right side - Editor Panel (developer view) */}
        <EditorPanel>
          <PanelHeader>
            <PanelTitle>Developer Layout View</PanelTitle>
            <Button icon="🔧" />
          </PanelHeader>
          <PanelContent>
            <DeveloperInstructionText>
              This panel represents the developer's view of the page structure. In a real implementation, developers would be able to drag and drop modules to build the layout that clients can then populate with content.
            </DeveloperInstructionText>
            
            <EditorStructure>
              <h1 data-type="H1">Header Element (H1)</h1>
              <p>Paragraph Element - Primary content area for text</p>
              
              <h2 data-type="H2">Sub-Heading Element (H2)</h2>
              <p>Paragraph Element - Secondary content description</p>
              
              <h2 data-type="H2">Additional Section Heading (H2)</h2>
              <p>Paragraph Element - Feature description text block</p>
              
              <h3 data-type="H3">Minor Section Heading (H3)</h3>
              <p>Paragraph Element - List content area</p>
            </EditorStructure>
            
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
            
            <FooterButton>Apply Template</FooterButton>
          </PanelContent>
        </EditorPanel>
      </EditorContainer>
    </PageContainer>
  );
};

export default EditorPage;