import React from 'react';
import styled from 'styled-components';

const teamColors = [
  {
    nombreDeEquipo: 'Real Carabayllo',
    principal: '#e3496d',
    sombra: '0px 0px 9px 7px rgba(250, 37, 87, 0.5)',
    sombraHover: '0px 0px 9px 7px rgba(236, 64, 103, 0.8)',
  },
  {
    nombreDeEquipo: 'Pivoteando',
    principal: '#f9913c',
    sombra: '0px 0px 9px 7px rgba(255, 167, 66, 0.3)',
    sombraHover: '0px 0px 9px 7px rgba(178, 91, 29, 0.8)',
  },
  {
    nombreDeEquipo: 'Ancon Basketball',
    principal: '#09d8a8',
    sombra: '0px 0px 9px 7px rgba(9, 230, 156, 0.3)',
    sombraHover: '0px 0px 9px 7px rgba(20, 210, 204, 0.8)',
  },
  {
    nombreDeEquipo: 'Union Norte',
    principal: '#e0ca05',
    sombra: '0px 0px 9px 7px rgba(209, 197, 24, 0.3)',
    sombraHover: '0px 0px 9px 7px rgba(153, 139, 18, 0.8)',
  },
  {
    nombreDeEquipo: 'DXT Ventanilla',
    principal: '#7d43f0',
    sombra: '0px 0px 9px 7px rgba(117, 47, 255, 0.3)',
    sombraHover: '0px 0px 9px 7px rgba(123, 62, 235, 0.8)',
  },
  {
    nombreDeEquipo: 'Puente Piedra',
    principal: '#2364fb',
    sombra: '0px 0px 9px 7px rgba(25, 76, 245, 0.3)',
    sombraHover: '0px 0px 9px 7px rgba(42, 108, 185, 0.8)',
  },
  {
    nombreDeEquipo: 'Manhattan',
    principal: '#3bd84d',
    sombra: '0px 0px 9px 7px rgba(47, 226, 50, 0.3)',
    sombraHover: '0px 0px 9px 7px rgba(48, 207, 61, 0.8)',
  },
  {
    nombreDeEquipo: 'Kingston',
    principal: '#e773c2',
    sombra: '0px 0px 9px 7px rgba(252, 0, 223, 0.3)',
    sombraHover: '0px 0px 9px 7px rgba(241, 71, 224, 0.8)',
  }
];

const filterColors = (teamName, teamColors) => {
  return teamColors.findIndex((teamColor) => teamColor.nombreDeEquipo === teamName)
};

let defaultPictureURL =
  'https://res.cloudinary.com/dbtw4mubl/image/upload/v1650487273/LBLN-statistics/profile-picture/default_n1pkte.jpg';

const ContainerDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.teamColor};
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${(props) => props.teamShadowColor};

  &:hover {
    box-shadow: ${(props) => props.teamShadowHoverColor};
  }
`;

const ContainerLeft = styled.div`
  /* background-color: red; */
  display: flex;
  height: 100px;
  justify-content: flex-end;
  align-items: flex-start;
`;
const ContainerRight = styled.div`
  width: 50px;
  height: 100px;
  /* background-color: blue; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const PositionNumberContainer = styled.div`
  width: 15px;
  height: 100%;
  padding-top: 0;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PositionPuntosContainer = styled.div`
  /* background-color: purple; */
  width: 15px;
  height: 50px;
  padding-top: 17px;
  padding-right: 20px;
`;

const StyledImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  padding: 17px;
`;

const DatosContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  justify-content: flex-start;
  align-items: flex-start;
  text-align: right;
  padding-top: 17px;
`;

const StyledH3 = styled.h3`
  color: white;
  margin: 0;
`;

const StyledH4 = styled.h4`
  color: #eaeaea;
  margin: 0;
  font-weight: 400;
`;

const ListItem = ({
  playerName,
  playerNumber,
  playerImg,
  playerPoints,
  teamName,
  playerPosition
}) => {

  // console.log(filterColors(teamName, teamColors))
  const teamColor = teamColors[filterColors(teamName, teamColors)].principal;
  const teamShadowColor = teamColors[filterColors(teamName, teamColors)].sombra;
  const teamShadowHoverColor = teamColors[filterColors(teamName, teamColors)].sombraHover;

  return (
    <>
      <ContainerDiv
        teamName={teamName}
        teamColor={teamColor}
        teamShadowColor={teamShadowColor}
        teamShadowHoverColor={teamShadowHoverColor}
      >
        <ContainerLeft>
          <PositionNumberContainer>
            <StyledH3>{playerPosition}</StyledH3>
          </PositionNumberContainer>
          <StyledImg src={playerImg || defaultPictureURL} />
          <DatosContainer>
            <StyledH3>{playerName}</StyledH3>
            <StyledH4>
              {teamName} #{playerNumber || ''}
            </StyledH4>
          </DatosContainer>
        </ContainerLeft>

        <ContainerRight>
          <PositionPuntosContainer>
            <StyledH3>{playerPoints}</StyledH3>
          </PositionPuntosContainer>
        </ContainerRight>
      </ContainerDiv>
    </>
  );
};

export { ListItem };
