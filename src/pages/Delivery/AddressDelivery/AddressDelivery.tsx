import React, {MouseEvent} from 'react';
import {Button, Flex, H2, Span} from '../../../styles/components';
import {ReactComponent as ClockIcon} from './Icons/clock.svg';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {AnimatePresence, motion} from 'framer-motion';
import {device} from '../../../styles/breakpoints';
import {AddressDeliveryProps} from './AddressDelivery.props';
import {AddressInputs} from './AddressInputs/AddressInputs';
import {useAppDispatch} from '../../../hooks/redux';
import {setDeliveryType} from '../../../redux/reducers/OrderSlice';
import styled from 'styled-components';

const StyledDeliveryBlock = styled.div`
  ${Flex};
  column-gap: 20px;
  margin-bottom: 30px;
  margin-top: 10px;

  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const StyledChoose = styled.div`
  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
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

const Time = styled(motion.div)`
  ${Flex};
  gap: 10px;

  @media only screen and ${device.mobileL} {
    span {
      font-size: 14px;
    }
  }
`;

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 20px;
  grid-area: title;

  @media only screen and ${device.tablet} {
    font-size: 16px;
  }
`;

export const AddressDelivery: React.FC<AddressDeliveryProps> = ({screenWidth}): JSX.Element => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const dispatch = useAppDispatch();

  const deliveryArr = [
    {id: 0, name: 'Доставка'},
    {id: 1, name: 'Самовывоз'}
  ];

  const variantsTime = {
    open: screenWidth <= 768 ? {opacity: 1, height: 'auto', marginTop: '30px'} : {opacity: 1, height: 'auto', marginTop: 0},
    closed: {opacity: 0, height: 0, marginTop: 0}
  };

  const handleActiveIndex = (index: number, e: MouseEvent<HTMLButtonElement>, name: string) => {
    setActiveIndex(index);
    e.preventDefault();
    dispatch(setDeliveryType(name));
  };

  return (
    <DeliveryBlock width={100}>
      <Title size={18}>2. Доставка</Title>
      <StyledDeliveryBlock align={'center'}>
        <StyledChoose>
          {deliveryArr.map((d, index) =>
            <StyledBtn
              key={d.id}
              size={16}
              weight={activeIndex === index ? 700 : 500}
              background={activeIndex === index ? 'var(--greenGradient)' : 'transparent'}
              onClick={(e: MouseEvent<HTMLButtonElement>) => handleActiveIndex(index, e, d.name)}
            >
              {d.name}
            </StyledBtn>
          )}
        </StyledChoose>
        <AnimatePresence>
          <Time
            align={'center'}
            animate={activeIndex === 0 ? 'open' : 'closed'}
            initial={'closed'}
            exit={'closed'}
            variants={variantsTime}
          >
            {activeIndex === 0 &&
              <>
                <ClockIcon/>
                <Span size={16} weight={500}>Доставим через  1 час 30 минут</Span>
              </>
            }
          </Time>
        </AnimatePresence>
      </StyledDeliveryBlock>
      <AddressInputs activeIndex={activeIndex}/>
    </DeliveryBlock>
  );
};
