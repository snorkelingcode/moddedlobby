import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: white;
  padding: 20px;
`;

const LoginCard = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
`;

const LoginTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const LoginDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const KeyInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--accent-color);
  border-radius: 30px;
  background-color: var(--gray-light);
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;
  
  &::placeholder {
    color: #999;
  }
`;

const ModuleDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  
  img {
    max-width: 100%;
    margin-bottom: 20px;
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

const ModuleContainer = styled.div`
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
`;

const ModuleLabel = styled.span`
  color: white;
`;

const ModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
`;

const ModuleItem = styled.div`
  background-color: #ccc;
  padding: 8px;
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
`;

const DeveloperPage: React.FC = () => {
  const [key, setKey] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate the key
    navigate('/dashboard');
  };

  const modules = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

  return (
    <LoginContainer>
      <CloseButton onClick={() => navigate('/')}>X</CloseButton>
      
      <LoginCard>
        <LoginTitle>Welcome to the developer page!</LoginTitle>
        <LoginDescription>Sign in with your developer key.</LoginDescription>
        
        <form onSubmit={handleSubmit}>
          <KeyInput 
            type="password" 
            placeholder="Key:" 
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
          
          <Button 
            icon="➡️" 
            onClick={(e) => handleSubmit(e as React.MouseEvent<HTMLButtonElement>)}
            style={{ position: 'relative', float: 'right', marginTop: '-50px', marginRight: '10px' }}
          />
        </form>
        
        <ModuleDisplay>
          <ModuleContainer>
            <ModuleLabel>Developer Drag & Drop Modules</ModuleLabel>
          </ModuleContainer>
          
          <ModuleGrid>
            {modules.map((module, index) => (
              <ModuleItem key={index}>{module}</ModuleItem>
            ))}
          </ModuleGrid>
        </ModuleDisplay>
      </LoginCard>
    </LoginContainer>
  );
};

export default DeveloperPage;