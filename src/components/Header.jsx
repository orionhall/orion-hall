import React from 'react';
import styled from 'styled-components';

import { Colors } from '../styles/Colors';
import PageConfig from '../constants/pages';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 10%;

  box-sizing: border-box;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  background: ${Colors.niceBlue};
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  flex: unset;
  @media (min-width: 700px) {
    flex: 1;
  }
`;

const NameButton = styled.button`
  height: 100%;
  width: 100%;

  padding: 0;

  border: none;
  font-family: inherit;
  font-weight: 600;
  background: ${Colors.niceBlue};

  font-size: 28px;
  margin-right: 15px;
  @media (min-width: 700px) {
    font-size: 44px;
    margin: 0;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex: unset;
  @media (min-width: 700px) {
    flex: 2;
  }
`;

const HeaderButton = styled.button`
  margin-right: 5px;

  border: 1px solid black;
  border-radius: 0.12em;

  background: ${Colors.niceBlue};
  font-family: inherit;
  font-weight: 500;

  transition: all 0.3s;

  width: unset;
  padding: 0.2em 0.4em;
  :active {
    background: ${Colors.white};
  }
  @media (min-width: 700px) {
    width: 7em;
    padding: 0.5em 0;
    :hover,
    :focus {
      background: white;
    }
  }
`;

const Header = ({ currentPage, setCurrentPage }) => (
  <Wrapper hasBottomBorder={currentPage !== PageConfig.home}>
    <Logo>
      <NameButton onClick={() => setCurrentPage(PageConfig.home)}>
        {PageConfig.home.name}
      </NameButton>
    </Logo>
    <ButtonArea>
      <HeaderButton onClick={() => setCurrentPage(PageConfig.about)}>
        {PageConfig.about.name}
      </HeaderButton>
      <HeaderButton onClick={() => setCurrentPage(PageConfig.experience)}>
        {PageConfig.experience.name}
      </HeaderButton>
      <HeaderButton onClick={() => setCurrentPage(PageConfig.blog)}>
        {PageConfig.blog.name}
      </HeaderButton>
    </ButtonArea>
  </Wrapper>
);

export default Header;
