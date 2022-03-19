import React from 'react';
import {DeliveryInputType} from './DeliveryInput.type';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 7px 15px;
    
    color: var(--textWhite);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    background: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    font-size: 12px;
    
    &::placeholder {
      color: var(--textWhite);
    }
  
  &:focus {
    outline: none;
  }
`;

export const DeliveryInput:React.FC<DeliveryInputType> = (): JSX.Element => {
  return (
    <StyledInput/>
  );
};
