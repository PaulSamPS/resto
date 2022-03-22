import React from 'react';
import {Button, H2} from '../../../styles/components';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import styled from 'styled-components';
import {device} from '../../../styles/breakpoints';

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 20px;
`;

const StyledBtn = styled(Button)`
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  padding: 20px 0;
  width: 181px;
  border: 1px solid var(--green);

  &:first-child {
    border-right: none;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
    border-left: none;
  }

  &:active {
    transform: unset;
  }
  @media only screen and ${device.tablet} {
    width: 100%;
    border-radius: unset;
    &:first-child {
      border-radius: 10px 10px 0 0!important;
      border-bottom: none;
      border-right: 1px solid var(--green);
    }
    &:last-child {
      border-radius: 0 0 10px 10px!important;
      border-top: none;
      border-left: 1px solid var(--green);
    }
  }
`;

const Pay = styled.div`
  
`;

const StyledChoose = styled.div`
  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const StyledPayBtn = styled(StyledBtn)`
  border-radius: 0;
  
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
`;

export const PayDelivery = () => {
  const [activeIndexPay, setActiveIndexPay] = React.useState<number>(0);

  const payArr = [
    {id: 0, name: 'Оплата онлайн'},
    {id: 1, name: 'Курьеру картой'},
    {id: 2, name: 'Наличными'}
  ];

  return (
    <DeliveryBlock width={100}>
      <Pay>
        <Title size={18}>3. Оплатить</Title>
        <StyledChoose>
          {payArr.map((d, index) =>
            <StyledPayBtn
              key={d.id}
              size={16}
              weight={activeIndexPay === index ? 700 : 500}
              background={activeIndexPay === index ? 'var(--greenGradient)' : 'transparent'}
              onClick={() => setActiveIndexPay(index)}
            >
              {d.name}
            </StyledPayBtn>
          )}
        </StyledChoose>
      </Pay>
    </DeliveryBlock>
  );
};
