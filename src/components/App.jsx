import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import pageConfig from '../constants/pages';
import { Colors } from '../styles/Colors';

const PageWrapper = styled.div`
  flex-direction: column;
  height: 100%;


  overflow-y: auto;
`;

const PageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ verticallyCenterContent }) =>
    verticallyCenterContent ? 'center' : 'flex-start'};

  height: 90%;

  font-size: 30px;
  font-weight: 700;
  background: ${({ background }) => background};
`;

const App = () => {
  const [page, setPage] = useState(pageConfig.home);
  const { component: PageComponent } = page;

  return (
    <PageWrapper>
      <Header page={page} setPage={setPage} />
      <PageBody
        background={page.background || Colors.white}
        verticallyCenterContent={page.name !== pageConfig.about.name}
      >
        <PageComponent name={page.name} />
      </PageBody>
    </PageWrapper>
  );
};

export default App;
