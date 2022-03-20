import React from 'react';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {H2, Input} from '../../../styles/components';
import styled from 'styled-components';

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 20px;
`;

const StyledContactInfo = styled.div`
  display: grid;
  grid-template-columns: 363px 363px;
  column-gap: 15px;
`;

const StyledInput = styled(Input)`
`;

export const ContactInfo = () => {
  return (
    <DeliveryBlock width={800}>
      <Title size={18}>1. Контактная информация</Title>
      <StyledContactInfo>
        <StyledInput placeholder='Имя' type='text'/>
        <StyledInput placeholder='Телефон' type='text'/>
      </StyledContactInfo>
    </DeliveryBlock>
  );
};
