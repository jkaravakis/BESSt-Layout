import styled from 'styled-components';
import { Header } from './components/Header';
import { Inputs } from './components/Inputs';
import { KeyMetrics } from './components/Project';
import '@tesla/design-system/dist/index.css';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  margin-left: 40px;
  margin-right: 40px;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Inputs />
        <KeyMetrics footprint={10} price={2} energyDensity={3} />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
