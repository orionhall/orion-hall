import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const initial = 0;
const name = 'orion-hall.com';
const blinker = '│';

const TextContainer = styled.div`
  display: flex;
  font-size: 50px;
  width: ${name.length - 1.5}ch;
  justify-content: left;
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
