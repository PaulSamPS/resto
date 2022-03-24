import React from 'react';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {Button, Flex, Span} from '../../../styles/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Flex};
`;

const Conditions = styled.div`
  ${Flex};
`;

const StyledLabel = styled.label`
  margin-right: 5px;
  color: var(--textWhite);
  font-size: 13px;
  ${Flex};
  input {
    margin-right: 5px;
  }
`;

const StyledSpan = styled(Span)`
  border-bottom: 1px solid var(--green);
  cursor: pointer;
`;

const StyledBtn = styled(Button)``;

export const Checkout: React.FC = () : JSX.Element => {
  return (
    <DeliveryBlock width={100}>
      <Wrapper align={'center'} justify={'space-between'}>
        <Conditions align={'center'}>
          <StyledLabel align={'center'}>
            <input type={'checkbox'}/>
            Я согласен на обработку моих перс. данных в соответствии с
          </StyledLabel>
          <StyledSpan size={13} color={'#72A479'}> Условиями</StyledSpan>
        </Conditions>
        <StyledBtn>Оформить заказ</StyledBtn>
      </Wrapper>
    </DeliveryBlock>
  );
};
