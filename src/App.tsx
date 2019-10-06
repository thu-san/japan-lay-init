import React from 'react';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <ContainerDiv
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Hello Japan-Lay</h1>
    </ContainerDiv>
  );
};

export default App;

// @region styles
const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
