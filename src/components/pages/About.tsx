import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import about from '../../static/about.md';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 16px;

  margin: 20px 35px 0;
  @media (min-width: 700px) {
    margin: 80px 140px 0;
  }
`;

const About = () => (
  <Wrapper>
    <ReactMarkdown>{about}</ReactMarkdown>
  </Wrapper>
);

export default About;
