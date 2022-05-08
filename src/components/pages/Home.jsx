import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const initial = 0;
const name = 'orion-hall.com';
const blinker = '│';

const TextContainer = styled.div`
  display: flex;
  justify-content: left;
  font-weight: 600;
  
  font-size: 40px;
  width: 95vw;
  @media (min-width: 700px) {
    font-size: 50px;
    width: ${name.length - 1.5}ch;
  }
`;

const Home = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(initial);
  const [showBlinker, setShowBlinker] = useState(true);
  const keepAppendingLetters = currentLetterIndex + 1 <= name.length;
  let letterTimeout = null,
    blinkerTimeout = null;
  const updateLetter = () =>
    keepAppendingLetters
      ? setTimeout(() => {
          setCurrentLetterIndex((prev) => prev + 1);
        }, 125)
      : setTimeout(() => {
          setCurrentLetterIndex(0);
        }, 2000);
  const updateBlinker = () => {
    return setTimeout(() => {
      setShowBlinker((prev) => !prev);
    }, 600);
  };

  useEffect(() => {
    letterTimeout = updateLetter();

    return () => {
      clearTimeout(letterTimeout);
    };
  }, [currentLetterIndex]);

  useEffect(() => {
    blinkerTimeout = updateBlinker();

    return () => {
      clearTimeout(blinkerTimeout);
    };
  }, [showBlinker]);

  return (
    <TextContainer>
      {name.slice(0, currentLetterIndex)}
      {showBlinker && blinker}
    </TextContainer>
  );
};

export default Home;
