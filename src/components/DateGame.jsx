import React from 'react';
import styled from 'styled-components';

let pivoteandoColor = '#807758';
let puenteColor = '#1d4e89';

const GameContainerDiv = styled.div`
  background-color: ${(props) => props.teamColor || 'blue'};
  color: white;
  height: 50px;
  min-width: 50px;
  margin: 5px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledH4 = styled.h4`
  color: white;
`;

const DateGame = () => {
  return (
    <>
      <GameContainerDiv teamColor={pivoteandoColor}>
        <StyledH4>PVT</StyledH4>
      </GameContainerDiv>

      <GameContainerDiv teamColor={puenteColor}>
        <StyledH4>PVT</StyledH4>
      </GameContainerDiv>

      <GameContainerDiv teamColor={pivoteandoColor}>
        <StyledH4>PVT</StyledH4>
      </GameContainerDiv>

      <GameContainerDiv teamColor={pivoteandoColor}>
        <StyledH4>PVT</StyledH4>
      </GameContainerDiv>

      <GameContainerDiv teamColor={pivoteandoColor}>
        <StyledH4>PVT</StyledH4>
      </GameContainerDiv>

      <GameContainerDiv teamColor={pivoteandoColor}>
        <StyledH4>PVT</StyledH4>
      </GameContainerDiv>
      
      <GameContainerDiv teamColor={pivoteandoColor}>
        <StyledH4>PVT</StyledH4>
      </GameContainerDiv>
    </>
  );
};

export { DateGame };
