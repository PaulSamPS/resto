import React from 'react';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {Button, Flex, Span} from '../../../styles/components';
import {device} from '../../../styles/breakpoints';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Flex};

  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'btn' 'cond';
    row-gap: 15px;
  }
`;

const StyledLabel = styled.label`
  margin-right: 5px;
  color: var(--textWhite);
  font-size: 13px;
  input {
    margin-right: 5px;
  }
  @media only screen and ${device.tablet} {
    grid-area: cond;
  }
  @media only screen and ${device.mobileL} {
    font-size: 10px;
  }
`;

const StyledSpan = styled(Span)`
  border-bottom: 1px solid var(--green);
  cursor: pointer;
  grid-area: btn;
  @media only screen and ${device.mobileL} {
    font-size: 10px;
  }
`;

const StyledBtn = styled(Button)``;

export const Checkout: React.FC = () : JSX.Element => {
  return (
    <DeliveryBlock width={100}>
      <Wrapper align={'center'} justify={'space-between'}>
        <StyledLabel>
          <input type={'checkbox'}/>
            Я согласен на обработку моих перс. данных в соответствии с
          <StyledSpan size={13} color={'#72A479'}> Условиями</StyledSpan>
        </StyledLabel>
        <StyledBtn>Оформить заказ</StyledBtn>
      </Wrapper>
    </DeliveryBlock>
  );
};
