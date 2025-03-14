import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { UserType } from './types';


// Pages
import Introduction from './pages/Introduction';
import Dashboard from './pages/Dashboard';
import ProjectSettings from './pages/ProjectSettings.tsx';
import ProfileSettings from './pages/ProfileSettings'; 
import AIReformat from './pages/AIReformat';
import ClientPage from './pages/ClientPage';
import DeveloperPage from './pages/DeveloperPage';
import EditorPage from './pages/EditorPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';

// Root Container
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f0;
`;

function App() {
  const [userType, setUserType] = useState<UserType>('developer'); // or 'client'

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/dashboard" element={<Dashboard userType={userType} />} />
          <Route path="/project-settings" element={<ProjectSettings />} />
          <Route path="/profile-settings" element={<ProfileSettings userType={userType} />} />
          <Route path="/ai-reformat" element={<AIReformat />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/developer" element={<DeveloperPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;