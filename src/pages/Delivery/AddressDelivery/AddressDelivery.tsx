import React from 'react';
import {Button, Flex, H2, Input, Span} from '../../../styles/components';
import {ReactComponent as ClockIcon} from './Icons/clock.svg';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const StyledDelivery = styled.div`
  margin-top: 20px;
  display: grid;
`;

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 20px;
  grid-area: title;
`;

const StyledDeliveryBlock = styled.div`
  ${Flex};
  column-gap: 20px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const StyledChoose = styled.div``;

const StyledBtn = styled(Button)`
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  padding: 20px 0;
  width: 181px;
  border: 1px solid var(--green);

  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  &:active {
    transform: unset;
  }
`;

const Time = styled.div`
  ${Flex};
  gap: 10px;
`;

const Address = styled(motion.div)`
  display: grid;
  grid-template-columns: 225px 173px 173px;
  grid-template-areas: 
    'title title title'
    'street street house'
    'office entrance level'
    'comment comment comment';
  column-gap: 15px;
  row-gap: 15px;
`;

const StreetInput = styled(Input)`
  grid-area: street;
`;

const HouseInput = styled(Input)`
  grid-area: house;
`;

const OfficeInput = styled(Input)`
  grid-area: office;
`;

const EntranceInput = styled(Input)`
  grid-area: entrance;
`;

const LevelInput = styled(Input)`
  grid-area: level;
`;

const CommentInput = styled(Input)`
  grid-area: comment;
`;

export const AddressDelivery = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const deliveryArr = [
    {id: 0, name: 'Доставка'},
    {id: 1, name: 'Самовывоз'}
  ];

  const variants = {
    open: {opacity: 1, y: 0},
    closed: {opacity: 0, y: '-10%'},
  };

  return (
    <DeliveryBlock width={800}>
      <Title size={18}>2. Доставка</Title>
      <StyledDelivery>
        <StyledDeliveryBlock align={'center'}>
          <StyledChoose>
            {deliveryArr.map((d, index) =>
              <StyledBtn
                key={d.id}
                size={16}
                weight={activeIndex === index ? 700 : 500}
                background={activeIndex === index ? 'var(--greenGradient)' : 'transparent'}
                onClick={() => setActiveIndex(index)}
              >
                {d.name}
              </StyledBtn>
            )}
          </StyledChoose>
          <Time align={'center'}>
            {activeIndex === 0 &&
              <>
                <ClockIcon/>
                <Span size={16} weight={500}>Доставим через  1 час 30 минут</Span>
              </>
            }
          </Time>
        </StyledDeliveryBlock>
        {activeIndex === 0 &&
          <Address
            animate={activeIndex === 0 ? 'open' : 'closed'}
            initial={'closed'}
            variants={variants}
          >
            <Title size={16}>Адрес доставки</Title>
            <StreetInput placeholder='Укажите улицу' type='text'/>
            <HouseInput placeholder='Номер дома' type='text'/>
            <OfficeInput placeholder='№ квартиры/офиса' type='text'/>
            <EntranceInput placeholder='Подъезд' type='text'/>
            <LevelInput placeholder='Этаж' type='text'/>
            <CommentInput placeholder='Комментарий' type='text'/>
          </Address>
        }
      </StyledDelivery>
    </DeliveryBlock>
  );
};
