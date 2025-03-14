import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 8px 20px;
  height: var(--header-height);
`;

const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  overflow: hidden;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    overflow-y: auto;
  }
`;

const FormatPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid #ccc;
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
`;

const EditPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
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

const EditButton = styled.button`
  background-color: #444;
  border: 1px solid #555;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
`;

const PanelContent = styled.div`
  flex: 1;
  padding: 0;
  overflow-y: auto;
`;

const HeaderSection = styled.div`
  background-color: #555;
  padding: 20px;
  color: white;
  position: relative;
`;

const ContentSection = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  position: relative;
`;

const FooterButton = styled.button`
  width: 100%;
  background-color: #555;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: auto;
`;

// Format panel components
const FormatHeader = styled.div`
  padding: 20px;
  background-color: #555;
`;

const FormatHeaderText = styled.h1`
  color: white;
  margin: 0;
`;

const FormatHeaderSubtext = styled.div`
  color: white;
  font-size: 12px;
  margin-top: 5px;
`;

const FormatContent = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const FormatHeading = styled.h3`
  margin-bottom: 10px;
`;

const FormatParagraph = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
`;

const UploadImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  min-height: 200px;
  border-radius: 5px;
  margin-top: 20px;
`;

const UploadIcon = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #777;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

// Edit panel components with editable content
const EditableHeading = styled.h1`
  margin: 0;
  position: relative;
  padding-right: 20px;
`;

const EditableSubheading = styled.p`
  margin: 5px 0 0 0;
  position: relative;
  padding-right: 20px;
`;

const EditableFeatureHeading = styled.h3`
  margin: 0;
  position: relative;
  padding-right: 20px;
`;

const EditableFeatureText = styled.p`
  margin: 5px 0 0 0;
  position: relative;
  padding-right: 20px;
`;

const EditTrigger = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-color: #444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 10px;
  
  &::after {
    content: "✏️";
    font-size: 10px;
  }
`;

const PreviewContainer = styled.div`
  border: 1px solid #ccc;
  margin-top: 20px;
  padding: 10px;
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const PreviewItem = styled.div`
  background-color: #555;
  padding: 10px;
  color: white;
  font-size: 12px;
  
  p {
    font-size: 10px;
  }
`;

// Color/Font picker popup
const EditorPopup = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 10;
`;

const PopupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  span {
    font-weight: bold;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    font-weight: bold;
  }
`;

const ColorPickerRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  span {
    width: 80px;
  }
  
  input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
  }
`;

const ColorPreview = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color || '#000000'};
  margin-left: 10px;
  border: 1px solid #ccc;
`;

const FontOptionRow = styled.div`
  margin-bottom: 10px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const FontSelect = styled.div`
  background-color: #ddd;
  padding: 8px;
  border-radius: 5px;
  text-align: center;
`;

const JustificationOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const JustifyOption = styled.button<{ isActive?: boolean }>`
  background-color: ${props => props.isActive ? '#aaa' : '#eee'};
  border: 1px solid #999;
  padding: 5px 10px;
  cursor: pointer;
  
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

const FontSizeOption = styled.div`
  background-color: #ddd;
  padding: 8px;
  border-radius: 5px;
  text-align: center;
`;

const EditorPage: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  const handleEditClick = (elementId: string) => {
    if (activePopup === elementId) {
      setActivePopup(null);
    } else {
      setActivePopup(elementId);
    }
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <PageContainer>
      <MenuBar>
        <Logo>Developer Platform</Logo>
        <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      </MenuBar>
      
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <EditorContainer>
        {/* Left side - Format Panel (static) */}
        <FormatPanel>
          <PanelHeader>
            <PanelTitle>Header 1</PanelTitle>
            <EditButton>+</EditButton>
          </PanelHeader>
          
          <PanelContent>
            <FormatHeader>
              <FormatHeaderText>Header 1</FormatHeaderText>
              <FormatHeaderSubtext>Header 6</FormatHeaderSubtext>
            </FormatHeader>
            
            <FormatContent>
              <FormatHeading>Header 3</FormatHeading>
              <FormatParagraph>Large Paragraph</FormatParagraph>
              
              <UploadImageSection>
                <UploadIcon>↑</UploadIcon>
                <div>Upload Image</div>
              </UploadImageSection>
            </FormatContent>
            
            <FooterButton>Industry Standard Format</FooterButton>
          </PanelContent>
        </FormatPanel>
        
        {/* Right side - Edit Panel (editable) */}
        <EditPanel>
          <PanelHeader>
            <PanelTitle>Welcome!</PanelTitle>
            <EditButton>+</EditButton>
          </PanelHeader>
          
          <PanelContent>
            <HeaderSection>
              <EditableHeading contentEditable>
                Welcome!
                <EditTrigger onClick={() => handleEditClick('header1')} />
              </EditableHeading>
              
              {activePopup === 'header1' && (
                <EditorPopup>
                  <PopupTitle>
                    <span>Font Color:</span>
                    <button onClick={() => setActivePopup(null)}>×</button>
                  </PopupTitle>
                  <ColorPickerRow>
                    <input type="text" defaultValue="#000000" />
                    <ColorPreview color="#000000" />
                  </ColorPickerRow>
                  <FontOptionRow>
                    <span>Font:</span>
                    <FontSelect>Times New Roman</FontSelect>
                  </FontOptionRow>
                  <FontOptionRow>
                    <span>Justification:</span>
                    <JustificationOptions>
                      <JustifyOption isActive={true}>Left</JustifyOption>
                      <JustifyOption>Center</JustifyOption>
                      <JustifyOption>Right</JustifyOption>
                    </JustificationOptions>
                  </FontOptionRow>
                  <FontOptionRow>
                    <span>Font Size:</span>
                    <FontSizeOption>H3</FontSizeOption>
                  </FontOptionRow>
                </EditorPopup>
              )}
              
              <EditableSubheading contentEditable>
                Our goal is to be your favorite brand for building websites!
                <EditTrigger onClick={() => handleEditClick('subheader1')} />
              </EditableSubheading>
              
              {activePopup === 'subheader1' && (
                <EditorPopup>
                  <PopupTitle>
                    <span>Font Color:</span>
                    <button onClick={() => setActivePopup(null)}>×</button>
                  </PopupTitle>
                  <ColorPickerRow>
                    <input type="text" defaultValue="#000000" />
                    <ColorPreview color="#000000" />
                  </ColorPickerRow>
                  <FontOptionRow>
                    <span>Font:</span>
                    <FontSelect>Times New Roman</FontSelect>
                  </FontOptionRow>
                  <FontOptionRow>
                    <span>Justification:</span>
                    <JustificationOptions>
                      <JustifyOption isActive={true}>Left</JustifyOption>
                      <JustifyOption>Center</JustifyOption>
                      <JustifyOption>Right</JustifyOption>
                    </JustificationOptions>
                  </FontOptionRow>
                </EditorPopup>
              )}
            </HeaderSection>
            
            <ContentSection>
              <EditableFeatureHeading contentEditable>
                Features
                <EditTrigger onClick={() => handleEditClick('features')} />
              </EditableFeatureHeading>
              
              {activePopup === 'features' && (
                <EditorPopup>
                  <PopupTitle>
                    <span>Font Color:</span>
                    <button onClick={() => setActivePopup(null)}>×</button>
                  </PopupTitle>
                  <ColorPickerRow>
                    <input type="text" defaultValue="#000000" />
                    <ColorPreview color="#000000" />
                  </ColorPickerRow>
                  <FontOptionRow>
                    <span>Font:</span>
                    <FontSelect>Times New Roman</FontSelect>
                  </FontOptionRow>
                  <FontOptionRow>
                    <span>Justification:</span>
                    <JustificationOptions>
                      <JustifyOption isActive={true}>Left</JustifyOption>
                      <JustifyOption>Center</JustifyOption>
                      <JustifyOption>Right</JustifyOption>
                    </JustificationOptions>
                  </FontOptionRow>
                </EditorPopup>
              )}
              
              <EditableFeatureText contentEditable>
                Our drag and drop modules save countless hours when building the UI for a website. If you're simply building a landing page for a client, you have come to the right place! We provide developers with the tools to create websites quickly, while also having the ability to manage the codebase themselves for additional customization and power!
              </EditableFeatureText>
              
              <PreviewContainer>
                <PreviewGrid>
                  <PreviewItem>
                    <h4>Header 1</h4>
                  </PreviewItem>
                  <PreviewItem>
                    <h4>Welcome!</h4>
                    <p>Our goal is to be your favorite brand for building websites!</p>
                  </PreviewItem>
                  <PreviewItem>
                    <h4>Header 3</h4>
                  </PreviewItem>
                  <PreviewItem>
                    <h4>Features</h4>
                  </PreviewItem>
                </PreviewGrid>
              </PreviewContainer>
            </ContentSection>
            
            <FooterButton>Edit</FooterButton>
          </PanelContent>
        </EditPanel>
      </EditorContainer>
    </PageContainer>
  );
};

export default EditorPage;