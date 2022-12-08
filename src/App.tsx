import styled from 'styled-components';
import { Header } from './components/Header';
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
    </AppContainer>
  );
}

export default App;
