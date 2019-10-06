import React from 'react';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <>
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ height: '100%' }}>
          <img src="/img/AppIcon.png" alt="" style={{ maxHeight: '100%' }} />
        </div>
      </Header>
      <ContainerDiv>
        <h1>Hello Japan-Lay</h1>
      </ContainerDiv>
    </>
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

const Header = styled.header`
  width: 100%;
  height: 50px;
  background: red;
`;
