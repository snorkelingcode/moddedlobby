import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import { ProfileSettingsProps, UserProfile } from '../types';

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

const ProfileCard = styled.div`
  background-color: var(--gray-dark);
  border-radius: 10px;
  padding: 20px;
`;

const ProfileSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #444;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #555;
`;

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

const SubscriptionPerks = styled.div`
  background-color: var(--gray-light);
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 5px 0;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface StyledButtonProps {
  danger?: boolean;
  fullWidth?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: block;
  background-color: ${props => props.danger ? '#d32f2f' : '#444'};
  color: white;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  transition: background-color 0.2s;
  text-align: center;
  border: none;
  
  &:hover {
    background-color: ${props => props.danger ? '#b71c1c' : '#555'};
  }
`;

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ userType = 'client' }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  // Sample profile data
  const profile: UserProfile = {
    email: 'example@email.com',
    accountType: userType,
    subscriptionRenewal: 'Jan. 16th 2026 6AM CST',
    perks: userType === 'client' 
      ? ['Developer Provided Editor', 'AI Website Reformatting', 'Import/Export Existing Websites']
      : ['5x Client Portals', 'Dedicated Support', 'Export Modules', 'AI Landing Page Generator', 'AI Landing Page Reformat']
  };
  
  return (
    <PageContainer>
      <HeaderBar>
        <Logo>Halotab</Logo>
        <MenuButton onClick={() => setMenuOpen(true)}>Menu</MenuButton>
      </HeaderBar>
      
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <ContentContainer>
        <Navigation activeTab="Profile Settings" />
        
        <ProfileCard>
          <ProfileSection>
            <LeftColumn>
              <div>
                <Label>Profile Picture:</Label>
                <ProfilePicture />
              </div>
              
              <FormGroup>
                <Label>Email:</Label>
                <Input type="email" value={profile.email} readOnly />
                <StyledButton style={{ marginTop: '10px' }}>Change</StyledButton>
              </FormGroup>
              
              <FormGroup>
                <Label>Password:</Label>
                <StyledButton>Change Password</StyledButton>
              </FormGroup>
            </LeftColumn>
            
            <RightColumn>
              <FormGroup>
                <Label>Account Type:</Label>
                <Input type="text" value={profile.accountType} readOnly />
              </FormGroup>
              
              <FormGroup>
                <Label>Subscription Renewal:</Label>
                <Input type="text" value={profile.subscriptionRenewal} readOnly />
              </FormGroup>
              
              <FormGroup>
                <Label>Subscription Perks:</Label>
                <SubscriptionPerks>
                  <ul>
                    {profile.perks.map((perk, index) => (
                      <li key={index}>{perk}</li>
                    ))}
                  </ul>
                </SubscriptionPerks>
              </FormGroup>
              
              <ActionButtons>
                <StyledButton fullWidth>Manage Subscription</StyledButton>
                <StyledButton fullWidth danger>Delete Account</StyledButton>
              </ActionButtons>
            </RightColumn>
          </ProfileSection>
        </ProfileCard>
      </ContentContainer>
    </PageContainer>
  );
};

export default ProfileSettings;