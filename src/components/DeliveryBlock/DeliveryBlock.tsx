import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{width: number}>`
  background: var(--brown);
  width: ${({width}) => width}px;
  border-radius: 10px;
  padding: 30px;
`;

export const DeliveryBlock: React.FC = ({children}) => {
  return (
    <Wrapper width={800}>
      {children}
    </Wrapper>
  );
};

