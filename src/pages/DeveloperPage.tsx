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

const DeveloperPanel = styled.div`
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

// Feature cards
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 25px;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;
  flex-grow: 1;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 20px;
  color: var(--accent-color);
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

const ActionButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 25px;
  cursor: pointer;
  align-self: center;
  
  &:hover {
    background-color: #e66c00;
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

const DeveloperPage: React.FC = () => {
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
  
  const features = [
    {
      icon: '🏗️',
      title: 'Drag & Drop Building',
      description: 'Create websites quickly with our extensive library of pre-built, customizable components.'
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description: 'Easily connect to third-party services and APIs with our simplified integration tools.'
    },
    {
      icon: '👥',
      title: 'Client Handoff',
      description: 'Transfer content management to clients while maintaining control of the codebase.'
    },
    {
      icon: '🔄',
      title: 'Version Control',
      description: 'Track changes and rollback to previous versions if needed, without complicated Git workflows.'
    }
  ];
  
  return (
    <PageContainer>
      <MenuBar>
        <Logo>Halotab</Logo>
        <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      </MenuBar>
      
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <ContentContainer>
        {/* Developer Panel */}
        <DeveloperPanel>
          {/* Header Section */}
          <HeaderSection>
            <EditableContainer>
              <EditableHeading contentEditable suppressContentEditableWarning={true}>
                Developer Platform
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
                Build websites faster, empower clients, reduce maintenance
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
            <ContentEditableContainer>
              <EditableSectionHeading contentEditable suppressContentEditableWarning={true}>
                Built for Developers, by Developers
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
                Our platform is designed to solve the most common pain points in the developer-client relationship. Build websites faster with our extensive component library, then hand off content management to clients while maintaining complete control over the code. This means no more minor text update requests, no more emergency calls about simple changes, and more time for you to focus on complex development tasks that really matter.
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
            
            <FeaturesGrid>
              {features.map((feature, index) => (
                <FeatureCard key={index}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeaturesGrid>
            
            <ActionButton onClick={() => window.location.href = '/dashboard'}>
              Go to Dashboard
            </ActionButton>
          </ContentSection>
        </DeveloperPanel>
        
        <EditHint>Try editing the content above! Click on any text to modify it, or click the pencil icon for styling options.</EditHint>
      </ContentContainer>
    </PageContainer>
  );
};

export default DeveloperPage;