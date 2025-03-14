import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { UserType } from './types';

// Pages
import Introduction from './pages/Introduction';
import Dashboard from './pages/Dashboard';
import ProjectSettings from './pages/ProjectSettings';
import ProfileSettings from './pages/ProfileSettings';
import AIReformat from './pages/AIReformat';
import ClientPage from './pages/ClientPage';
import DeveloperPage from './pages/DeveloperPage';
import EditorPage from './pages/EditorPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

// Root Container
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
  overflow-x: hidden;
`;

function App() {
  // Define userType directly without useState
  const userType: UserType = 'developer';

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          {/* Make EditorPage the landing page */}
          <Route path="/" element={<EditorPage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/dashboard" element={<Dashboard userType={userType} />} />
          <Route path="/project-settings" element={<ProjectSettings />} />
          <Route path="/profile-settings" element={<ProfileSettings userType={userType} />} />
          <Route path="/ai-reformat" element={<AIReformat />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/developer" element={<DeveloperPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;