import React from 'react';
import GNB from './Components/GNB'
import styled from 'styled-components';
import RootPage from './Components/RootPage';
const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <RootDiv>
      <GNB />
      <RootPage />
    </RootDiv>
  );
}

export default App;
