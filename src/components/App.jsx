import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Home from './pages/Home';
import PageConfig from '../constants/pages';
import { Colors } from '../styles/Colors';

const PageWrapper = styled.div`
  flex-direction: column;
  height: 100%;
`;

const PageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90%;

  font-size: 30px;
  font-weight: 700;
  background: ${({ pageColor }) => pageColor};
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState(PageConfig.home);

  return (
    <PageWrapper>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageBody pageColor={currentPage.pageColor || Colors.white}>
        {currentPage === PageConfig.home ? <Home /> : currentPage.name}
      </PageBody>
    </PageWrapper>
  );
};

export default App;
