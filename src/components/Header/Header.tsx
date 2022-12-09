import styled from 'styled-components';
import { SiteHeader, SiteLogo, } from '@tesla/design-system-react';

const HeaderContainer = styled.div`
  margin-bottom: 50px;
`;

export const Header = () => {

  return (
    <HeaderContainer>
      <SiteHeader>
        <SiteLogo appTitle='BESSt Layout' />
      </SiteHeader>
    </HeaderContainer>
  );
}