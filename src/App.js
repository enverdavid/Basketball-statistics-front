import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { TeamButtonsContainer } from './components/TeamButtonsContainer';

const GlobalStyle = createGlobalStyle`

  body {
    background-color: black;
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }
`;

function App() {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    const data = await fetch('http://localhost:4001/players');
    const players = await data.json();
    setPlayers(players.data);
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <GlobalStyle />
      <TeamButtonsContainer data={players}/>
    </>
  );
}

export default App;
