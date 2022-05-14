import { React } from 'react';
import { ListItem } from './ListItem';
import styled from 'styled-components';

const ItemContainerDiv = styled.div`
  /* background-color: #0c1a25; */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const ItemContainer = ({data}) => {

  return (
    <ItemContainerDiv>
      {data.map((p) => {
        return (
          <ListItem
            key={p._id}
            playerName={p.playerName}
            playerNumber={p.playerNumber}
            playerImg={p.playerImg}
            playerPoints={p.playerPoints}
            teamName={p.teamName}
            playerPosition={p.playerPosition}
            // teamColor={p.teamColor}
            // teamShadowColor={p.teamShadowColor}
            // teamShadowHoverColor={p.teamShadowHoverColor}
          />
        );
      })}
    </ItemContainerDiv>
  );
};

export { ItemContainer };
