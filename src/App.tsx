import styled from 'styled-components';
import { Heading } from '@tesla/design-system-react';
import { Header } from './components/Header';
import { Inputs } from './components/Inputs';
import '@tesla/design-system/dist/index.css';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Heading is='h1'>Layout Configurator</Heading>
      <Inputs />
    </AppContainer>
  );
}

export default App;
