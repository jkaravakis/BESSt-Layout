import styled from 'styled-components';
import { Header } from './components/Header';
import { Inputs } from './components/Inputs';
import { Form } from '@tesla/informed-tds';
import { KeyMetrics, Layout } from './components/Project';
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

const SiteContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 50px;
  max-height: 500px;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Form>
      <ContentContainer>
        <Inputs />
        <SiteContainer>
          <KeyMetrics />
          <Layout />
        </SiteContainer>
      </ContentContainer>
      </Form>
    </AppContainer>
  );
}

export default App;
