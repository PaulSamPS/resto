import React, {MouseEvent} from 'react';
import {Button, H2} from '../../../styles/components';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {PayDeliveryProps} from './PayDelivery.props';
import {device} from '../../../styles/breakpoints';
import {useAppDispatch} from '../../../hooks/redux';
import {setPayment} from '../../../redux/reducers/OrderSlice';
import styled from 'styled-components';

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
    width: unset;
    font-size: 14px;
  }

  @media only screen and ${device.mobileM} {
    font-size: 12px;
  }
`;

const Pay = styled.div`
  
`;

const StyledChoose = styled.div`
  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledPayBtn = styled(StyledBtn)`
  border-radius: 0;
  
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
`;

export const PayDelivery: React.FC<PayDeliveryProps> = ({screenWidth}): JSX.Element => {
  const [activeIndexPay, setActiveIndexPay] = React.useState<number>(0);
  const dispatch = useAppDispatch();

  const payArr = [
    {id: 0, name: 'Оплата онлайн', mobileName: 'Онлайн'},
    {id: 1, name: 'Курьеру картой', mobileName: 'Картой'},
    {id: 2, name: 'Наличными', mobileName: 'Наличными'}
  ];

  const handleActiveIndexPay = (index: number, e: MouseEvent<HTMLButtonElement>, name: string) => {
    setActiveIndexPay(index);
    e.preventDefault();
    dispatch(setPayment(name));
  };

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
              onClick={(e: MouseEvent<HTMLButtonElement>) => handleActiveIndexPay(index, e, d.name)}
            >
              {screenWidth <= 768 ? d.mobileName : d.name}
            </StyledPayBtn>
          )}
        </StyledChoose>
      </Pay>
    </DeliveryBlock>
  );
};
