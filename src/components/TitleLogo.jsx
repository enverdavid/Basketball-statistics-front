import React from 'react';
import styled from 'styled-components';

const ContainerTitleLogo = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledLogo = styled.img`
  width: 150px;
  margin-top: 20px;
`;

const StyledTitle = styled.h3`
  margin: 0;
`;

const TitleLogo = () => {
  return (
    <>
      <StyledLogo
        src="https://res.cloudinary.com/dbtw4mubl/image/upload/v1650865215/LBLN-statistics/logos/logo_usqcde.png"
        alt="logo de LBLN"
      />
      <ContainerTitleLogo>
        <StyledTitle>Liga de Basket del Norte</StyledTitle>
        {/* <StyledTitle>Máximos Anotadores</StyledTitle> */}
      </ContainerTitleLogo>
    </>
  );
};

export { TitleLogo };
