import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f8f8;
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

const ContentContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  flex: 1;
`;

const EditorPanel = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
`;

const HeaderSection = styled.div`
  background-color: #555;
  padding: 25px;
  color: white;
  position: relative;
`;

const ContentSection = styled.div`
  padding: 25px;
  background-color: #f0f0f0;
  position: relative;
`;

// Editable components with dotted borders
const EditableContainer = styled.div`
  border: 2px dotted rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
  transition: border-color 0.2s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
  }
  
  &:focus-within {
    border-color: rgba(255, 255, 255, 0.8);
  }
`;

const ContentEditableContainer = styled(EditableContainer)`
  border-color: rgba(0, 0, 0, 0.2);
  
  &:hover {
    border-color: rgba(0, 0, 0, 0.4);
  }
  
  &:focus-within {
    border-color: rgba(0, 0, 0, 0.4);
  }
`;

const EditableHeading = styled.h1`
  margin: 0;
  position: relative;
  padding-right: 30px;
  outline: none;
`;

const EditableSubheading = styled.p`
  margin: 0;
  position: relative;
  padding-right: 30px;
  font-size: 1.1rem;
  outline: none;
`;

const EditableFeatureHeading = styled.h2`
  margin: 0;
  position: relative;
  padding-right: 30px;
  outline: none;
`;

const EditableFeatureText = styled.p`
  margin: 0;
  position: relative;
  padding-right: 30px;
  line-height: 1.6;
  outline: none;
`;

const EditTrigger = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: #444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 12px;
  
  &::after {
    content: "✏️";
    font-size: 12px;
  }
`;

const UploadImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  min-height: 200px;
  border-radius: 8px;
  margin-top: 25px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 2px dotted rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #d0d0d0;
    border-color: rgba(0, 0, 0, 0.4);
  }
`;

const UploadIcon = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #777;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 24px;
`;

const UploadText = styled.div`
  font-size: 16px;
  color: #555;
  font-weight: 500;
`;

// Editor popup for styling
const EditorPopup = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 10;
  min-width: 250px;
`;

const PopupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  
  span {
    font-weight: bold;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    font-weight: bold;
    font-size: 16px;
  }
`;

const ColorPickerRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  span {
    width: 80px;
    font-weight: 500;
  }
  
  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const ColorPreview = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.color || '#000000'};
  margin-left: 10px;
  border: 1px solid #ccc;
`;

const FontOptionRow = styled.div`
  margin-bottom: 15px;
  
  span {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

const FontSelect = styled.div`
  background-color: #eee;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const JustificationOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  
  span {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

const JustifyOption = styled.button<{ isActive?: boolean }>`
  background-color: ${props => props.isActive ? '#aaa' : '#eee'};
  border: 1px solid #999;
  padding: 8px 12px;
  cursor: pointer;
  
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  
  &:last-child {
    border-radius: 0 4px 4px 0;
  }
  
  &:hover {
    background-color: ${props => props.isActive ? '#999' : '#e0e0e0'};
  }
`;

const FontSizeOption = styled.div`
  background-color: #eee;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background-color: #e0e0e0;
  }
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
      
      <ContentContainer>
        {/* Content Editor Panel */}
        <EditorPanel>
          {/* Header Section */}
          <HeaderSection>
            <EditableContainer>
              <EditableHeading contentEditable suppressContentEditableWarning={true}>
                Welcome!
                <EditTrigger onClick={() => handleEditClick('header1')} />
              </EditableHeading>
            </EditableContainer>
            
            {activePopup === 'header1' && (
              <EditorPopup>
                <PopupTitle>
                  <span>Font Color:</span>
                  <button onClick={() => setActivePopup(null)}>×</button>
                </PopupTitle>
                <ColorPickerRow>
                  <input type="text" defaultValue="#FFFFFF" />
                  <ColorPreview color="#FFFFFF" />
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
                  <FontSizeOption>H1</FontSizeOption>
                </FontOptionRow>
              </EditorPopup>
            )}
            
            <EditableContainer>
              <EditableSubheading contentEditable suppressContentEditableWarning={true}>
                Edit this page to be exactly how you want it!
                <EditTrigger onClick={() => handleEditClick('subheader1')} />
              </EditableSubheading>
            </EditableContainer>
            
            {activePopup === 'subheader1' && (
              <EditorPopup>
                <PopupTitle>
                  <span>Font Color:</span>
                  <button onClick={() => setActivePopup(null)}>×</button>
                </PopupTitle>
                <ColorPickerRow>
                  <input type="text" defaultValue="#FFFFFF" />
                  <ColorPreview color="#FFFFFF" />
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
          
          {/* Content Section */}
          <ContentSection>
            <ContentEditableContainer>
              <EditableFeatureHeading contentEditable suppressContentEditableWarning={true}>
                Features
                <EditTrigger onClick={() => handleEditClick('features')} />
              </EditableFeatureHeading>
            </ContentEditableContainer>
            
            {activePopup === 'features' && (
              <EditorPopup>
                <PopupTitle>
                  <span>Font Color:</span>
                  <button onClick={() => setActivePopup(null)}>×</button>
                </PopupTitle>
                <ColorPickerRow>
                  <input type="text" defaultValue="#333333" />
                  <ColorPreview color="#333333" />
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
            
            <ContentEditableContainer>
              <EditableFeatureText contentEditable suppressContentEditableWarning={true}>
                This content editor puts the power back in your hands. Now you can update your website text anytime without calling your developer. Simply click on any text to edit it directly, or use the styling options to customize fonts, colors, and layout. You can even upload new images with a single click. Changes are saved automatically and your website stays fresh with minimal effort.
                <EditTrigger onClick={() => handleEditClick('featureText')} />
              </EditableFeatureText>
            </ContentEditableContainer>
            
            {activePopup === 'featureText' && (
              <EditorPopup>
                <PopupTitle>
                  <span>Font Color:</span>
                  <button onClick={() => setActivePopup(null)}>×</button>
                </PopupTitle>
                <ColorPickerRow>
                  <input type="text" defaultValue="#333333" />
                  <ColorPreview color="#333333" />
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
            
            {/* Upload Image Section */}
            <UploadImageSection>
              <UploadIcon>↑</UploadIcon>
              <UploadText>Upload Image</UploadText>
            </UploadImageSection>
          </ContentSection>
        </EditorPanel>
      </ContentContainer>
    </PageContainer>
  );
};

export default EditorPage;