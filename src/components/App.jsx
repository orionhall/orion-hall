import React, { useState } from 'react';
import styled from 'styled-components';

import Home from './pages/Home';
import { Colors } from '../styles/Colors';

const PageWrapper = styled.div`
  flex-direction: column;
  height: 100vh;
`;

const PageBody = styled.div`
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  background: ${({ pageColor }) => pageColor};
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  background: ${Colors.niceBlue};
`;

// border-bottom: ${({ hasBottomBorder }) =>
// hasBottomBorder ? '1px solid black' : 'none'};
const NameArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 2;
`;

const NameButton = styled.button`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
  font-family: inherit;
  font-size: 44px;
  font-weight: 500;
  background: ${Colors.niceBlue};
`;

const HeaderButton = styled.button`
  width: 7em;
  padding: 0.5em 0;
  border-radius: 0.12em;
  border: 1px solid black;
  font-family: inherit;
  font-weight: 500;
  background: ${Colors.niceBlue};
  transition: all 0.3s;

  :hover {
    background: white;
  }
`;

const pages = {
  home: {
    name: '',
    pageColor: Colors.niceBlue,
  },
  about: {
    name: 'About Me',
    // pageColor: Colors.niceBlue,
  },
  experience: {
    name: 'Experience',
    // pageColor: Colors.niceBlue,
  },
  blog: {
    name: 'Blog',
    // pageColor: Colors.niceBlue,
  },
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(pages.home);

  return (
    <PageWrapper>
      <Header hasBottomBorder={currentPage !== pages.home}>
        <NameArea>
          <NameButton onClick={() => setCurrentPage(pages.home)}>
            Orion Hall
          </NameButton>
        </NameArea>
        <ButtonArea>
          <HeaderButton onClick={() => setCurrentPage(pages.about)}>
            {pages.about.name}
          </HeaderButton>
          <HeaderButton onClick={() => setCurrentPage(pages.experience)}>
            {pages.experience.name}
          </HeaderButton>
          <HeaderButton onClick={() => setCurrentPage(pages.blog)}>
            {pages.blog.name}
          </HeaderButton>
        </ButtonArea>
      </Header>
      <PageBody pageColor={currentPage.pageColor || Colors.white}>
        {currentPage === pages.home ? <Home /> : currentPage.name}
      </PageBody>
    </PageWrapper>
  );
};

export default App;
