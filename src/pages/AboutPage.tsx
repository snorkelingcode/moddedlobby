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

const AboutPanel = styled.div`
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

const EditableSectionHeading = styled.h2`
  margin: 0;
  position: relative;
  padding-right: 30px;
  outline: none;
`;

const EditableParagraph = styled.p`
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

// Hint message at the bottom
const EditHint = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  font-style: italic;
  color: #666;
`;

const AboutPage: React.FC = () => {
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
        {/* About Panel */}
        <AboutPanel>
          {/* Header Section */}
          <HeaderSection>
            <EditableContainer>
              <EditableHeading contentEditable suppressContentEditableWarning={true}>
                About Our Platform
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
                  <span>Font Size:</span>
                  <FontSizeOption>H1</FontSizeOption>
                </FontOptionRow>
              </EditorPopup>
            )}
            
            <EditableContainer>
              <EditableSubheading contentEditable suppressContentEditableWarning={true}>
                Bridging the gap between developers and clients with powerful tools
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
              </EditorPopup>
            )}
          </HeaderSection>
          
          {/* Content Section */}
          <ContentSection>
            {/* For Clients Section */}
            <ContentEditableContainer>
              <EditableSectionHeading contentEditable suppressContentEditableWarning={true}>
                For Clients
                <EditTrigger onClick={() => handleEditClick('clientHeading')} />
              </EditableSectionHeading>
            </ContentEditableContainer>
            
            {activePopup === 'clientHeading' && (
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
              </EditorPopup>
            )}
            
            <ContentEditableContainer>
              <EditableParagraph contentEditable suppressContentEditableWarning={true}>
                Our platform empowers you to take control of your website content without technical knowledge. No more waiting for your developer to make simple text changes or update images. With our intuitive content editor, you can modify your website whenever you need to, ensuring your information stays current. The easy-to-use interface highlights editable areas and provides simple styling options that anyone can use. Your changes are automatically saved and implemented, keeping your site fresh with minimal effort.
                <EditTrigger onClick={() => handleEditClick('clientText')} />
              </EditableParagraph>
            </ContentEditableContainer>
            
            {activePopup === 'clientText' && (
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
            
            {/* For Developers Section */}
            <ContentEditableContainer style={{ marginTop: '25px' }}>
              <EditableSectionHeading contentEditable suppressContentEditableWarning={true}>
                For Developers
                <EditTrigger onClick={() => handleEditClick('devHeading')} />
              </EditableSectionHeading>
            </ContentEditableContainer>
            
            {activePopup === 'devHeading' && (
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
              </EditorPopup>
            )}
            
            <ContentEditableContainer>
              <EditableParagraph contentEditable suppressContentEditableWarning={true}>
                Developers love our platform because it streamlines the client relationship. Build websites faster with our drag-and-drop modules while maintaining full control over the codebase. Once you've designed the site, you can hand off content management to clients through our specialized client portal. This means fewer tickets for minor text changes and more time for meaningful development work. The platform maintains proper separation between structure and content, ensuring clients can't break the site's functionality while updating their content. You'll spend less time on maintenance and more time creating new features and projects.
                <EditTrigger onClick={() => handleEditClick('devText')} />
              </EditableParagraph>
            </ContentEditableContainer>
            
            {activePopup === 'devText' && (
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
          </ContentSection>
        </AboutPanel>
        
        <EditHint>Try editing the content above! Click on any text to modify it, or click the pencil icon for styling options.</EditHint>
      </ContentContainer>
    </PageContainer>
  );
};

export default AboutPage;