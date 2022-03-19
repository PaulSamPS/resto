import React from 'react';
import {DeliveryBlock} from '../../components/DeliveryBlock/DeliveryBlock';
import {Flex, H2} from '../../styles/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Title = styled(H2)`
  margin-bottom: 30px;
  text-transform: none;
`;

const StyledInputsBlock = styled.div`
  ${Flex};
`;

const StyledInput = styled.input`
    padding: 15px 30px;
  width: 363px;
  margin-right: 15px;


  color: var(--textWhite);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    background: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    font-size: 16px;
  font-weight: 400;
    
    &::placeholder {
      color: var(--textWhite);
      opacity: 1;
    }
  
  &:last-child {
    margin-right: 0;
  }
  
  &:focus {
    outline: none;
  }
`;

export const Delivery = () => {
  return (
    <Wrapper>
      <DeliveryBlock>
        <Title size={18}>1. Контактная информация</Title>
        <StyledInputsBlock>
          <StyledInput placeholder='Имя' type='text'/>
          <StyledInput placeholder='Телефон' type='text'/>
        </StyledInputsBlock>
      </DeliveryBlock>
    </Wrapper>
  );
};
