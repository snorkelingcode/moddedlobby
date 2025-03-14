import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: white;
  padding: 20px;
`;

const ClientCard = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
`;

const ClientTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ClientDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ActionButton = styled(Button)`
  background-color: var(--accent-color);
  color: white;
  padding: 12px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #e66c00;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: var(--accent-color);
  font-size: 24px;
  cursor: pointer;
`;

const ClientPage: React.FC = () => {
  const navigate = useNavigate();

  const handleEditorNavigation = () => {
    // Set a session flag to indicate the user came from the client page
    sessionStorage.setItem('fromClientPortal', 'true');
    navigate('/editor');
  };

  return (
    <ClientContainer>
      <CloseButton onClick={() => navigate('/')}>X</CloseButton>
      
      <ClientCard>
        <ClientTitle>Welcome to the client page!</ClientTitle>
        <ClientDescription>
          Use the editor to get an idea of how the site works from a client's prospective!
        </ClientDescription>
        <center>
        <ActionButton onClick={handleEditorNavigation}>
          Let's Go!
        </ActionButton>
        </center>
      </ClientCard>
    </ClientContainer>
  );
};

export default ClientPage;