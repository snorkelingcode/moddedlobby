import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { ProfileSettingsProps, UserProfile } from '../types';

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
  border: 2px solid var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ userType = 'client' }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
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
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
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
                <Button style={{ marginTop: '10px' }}>Change</Button>
              </FormGroup>
              
              <FormGroup>
                <Label>Password:</Label>
                <Button>Sign-In</Button>
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
                <Button fullWidth>Manage Subscription</Button>
                <Button fullWidth danger>Delete Account</Button>
              </ActionButtons>
            </RightColumn>
          </ProfileSection>
        </ProfileCard>
      </ContentContainer>
    </PageContainer>
  );
};

export default ProfileSettings;