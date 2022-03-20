import React from 'react';
import {DeliveryBlockProps} from './DeliveryBlock.props';
import styled from 'styled-components';

const Wrapper = styled.div<{width: number}>`
  background: var(--brown);
  width: ${({width}) => width}px;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
`;

export const DeliveryBlock: React.FC<DeliveryBlockProps> = ({children, width}): JSX.Element => {
  return (
    <Wrapper width={width}>
      {children}
    </Wrapper>
  );
};

