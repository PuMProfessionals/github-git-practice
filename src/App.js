import React from 'react';
import styled from 'styled-components'
import { BowlingBall } from '@styled-icons/boxicons-regular/BowlingBall';

const names = [
  'Sharon He',
  'Jilly Song',
  'Name X',
  'Keshini Ramchurreetoo'
]

const App = () => {
  return (
    <div>
        <h1> Let's Practice Git and Github!</h1>
        {!!names && names.map((name) => (
          <NamesContainer>
            <Icon as={BowlingBall} />
            <div style={{ marginLeft: '10px' }}>{name}</div>
          </NamesContainer>
        ))}
    </div>
  );
}

const Icon = styled.svg`
    height: 35px;
    width: 35px;
`;

const NamesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default App;