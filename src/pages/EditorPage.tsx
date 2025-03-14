import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardHeader = styled.div`
  background-color: #333;
  color: white;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

const CardContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PreviewCard = styled(Card)`
  position: relative;
  border: 1px solid #e0e0e0;
`;

const PreviewCardHeader = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviewBadge = styled.span`
  background-color: var(--accent-color);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: normal;
`;

const HowToCard = styled(Card)`
  margin-top: 2rem;
`;

const HowToList = styled.ol`
  padding-left: 1.5rem;
  margin: 1rem 0;
  
  li {
    margin-bottom: 1rem;
  }
`;

// Original content from the code
// Format panel content
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

const FooterButton = styled.button`
  width: 100%;
  background-color: #555;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: auto;
`;

// Edit panel content components
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

const ActionButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;
  align-self: center;
  
  &:hover {
    background-color: #e66c00;
  }
`;

const EditorPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
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
        <h1>Website Customization Templates</h1>
        <p>Choose from one of our professionally designed templates to get started</p>
        
        <CardsGrid>
          {/* Content Editor Preview Card */}
          <PreviewCard>
            <PreviewCardHeader>
              Content Editor
              <PreviewBadge>Modern</PreviewBadge>
            </PreviewCardHeader>
            <CardContent>
              {/* Using the original content as a preview */}
              <div className="sc-gfoqjT XjPGo">
                <HeaderSection className="sc-kbousE Kbduv">
                  <EditableHeading contentEditable="true" className="sc-hHOBiw hgbTIH">
                    Welcome!
                    <EditTrigger className="sc-kzqdkY VOXSS"></EditTrigger>
                  </EditableHeading>
                  <EditableSubheading contentEditable="true" className="sc-kWtpeL gJOyRk">
                    Our goal is to be your favorite brand for building websites!
                    <EditTrigger className="sc-kzqdkY VOXSS"></EditTrigger>
                  </EditableSubheading>
                </HeaderSection>
                
                <ContentSection className="sc-sLsrZ kzrLFk">
                  <EditableFeatureHeading contentEditable="true" className="sc-ecPEgm logKGZ">
                    Features
                    <EditTrigger className="sc-kzqdkY VOXSS"></EditTrigger>
                  </EditableFeatureHeading>
                  <EditableFeatureText contentEditable="true" className="sc-gdyeKB itVvnn">
                    Our drag and drop modules save countless hours when building the UI for a website. If you're simply building a landing page for a client, you have come to the right place!
                  </EditableFeatureText>
                  
                  <PreviewContainer className="sc-bDpDS lhdtVa">
                    <PreviewGrid className="sc-bVHCgj jthJJr">
                      <PreviewItem className="sc-dSIIpw iVNzMZ">
                        <h4>Header 1</h4>
                      </PreviewItem>
                      <PreviewItem className="sc-dSIIpw iVNzMZ">
                        <h4>Welcome!</h4>
                        <p>Our goal is to be your favorite brand for building websites!</p>
                      </PreviewItem>
                      <PreviewItem className="sc-dSIIpw iVNzMZ">
                        <h4>Header 3</h4>
                      </PreviewItem>
                      <PreviewItem className="sc-dSIIpw iVNzMZ">
                        <h4>Features</h4>
                      </PreviewItem>
                    </PreviewGrid>
                  </PreviewContainer>
                </ContentSection>
                <FooterButton className="sc-dBmzty gZgKUJ">Edit</FooterButton>
              </div>
              
              <ActionButton>Select This Template</ActionButton>
            </CardContent>
          </PreviewCard>
          
          {/* Format Editor Preview Card */}
          <PreviewCard>
            <PreviewCardHeader>
              Format Editor
              <PreviewBadge>Classic</PreviewBadge>
            </PreviewCardHeader>
            <CardContent>
              {/* Using the original content as a preview */}
              <div className="sc-dBmzty kcAaHV">
                <FormatHeader className="sc-ejfMa-d jkxPHh">
                  <FormatHeaderText className="sc-iEXKAA kcSvnR">Header 1</FormatHeaderText>
                  <FormatHeaderSubtext className="sc-EgOXT kvOLlf">Header 6</FormatHeaderSubtext>
                </FormatHeader>
                
                <FormatContent className="sc-eZYNyq XvEDG">
                  <FormatHeading className="sc-dlWCHZ fmKmva">Header 3</FormatHeading>
                  <FormatParagraph className="sc-hHOBiw cwBaRj">Large Paragraph</FormatParagraph>
                  
                  <UploadImageSection className="sc-kWtpeL ntJYi">
                    <UploadIcon className="sc-ecPEgm eeZcnc">↑</UploadIcon>
                    <div>Upload Image</div>
                  </UploadImageSection>
                </FormatContent>
                
                <FooterButton className="sc-dkmUuB gLJRuN">Industry Standard Format</FooterButton>
              </div>
              
              <ActionButton>Select This Template</ActionButton>
            </CardContent>
          </PreviewCard>
        </CardsGrid>
        
        {/* How to use card */}
        <HowToCard>
          <CardHeader>How to Use the Website Customization Tool</CardHeader>
          <CardContent>
            <HowToList>
              <li><strong>Select a template</strong> - Choose the layout and style that best fits your project needs</li>
              <li><strong>Customize content</strong> - Edit text, headers, and other content by clicking on the edit icons</li>
              <li><strong>Upload media</strong> - Add images, videos, and other media to enhance your website</li>
              <li><strong>Modify styling</strong> - Change colors, fonts, and spacing to match your brand</li>
              <li><strong>Preview changes</strong> - See how your website will look before publishing</li>
              <li><strong>Export or publish</strong> - Download your code or publish directly to your domain</li>
            </HowToList>
            
            <p>Need more help? Check out our <a href="#">documentation</a> or <a href="#">contact support</a>.</p>
          </CardContent>
        </HowToCard>
      </ContentContainer>
    </PageContainer>
  );
};

export default EditorPage;