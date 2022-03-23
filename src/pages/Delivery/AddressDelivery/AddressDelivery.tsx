import React, {ChangeEvent} from 'react';
import {Button, Flex, H2, Input, Span} from '../../../styles/components';
import {ReactComponent as ClockIcon} from './Icons/clock.svg';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {AnimatePresence, motion} from 'framer-motion';
import {useAppSelector} from '../../../hooks/redux';
import {device} from '../../../styles/breakpoints';
import styled from 'styled-components';

const StyledDeliveryBlock = styled.div`
  ${Flex};
  column-gap: 20px;
  margin-bottom: 30px;
  margin-top: 10px;

  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`;

const StyledChoose = styled.div`
`;

const StyledBtn = styled(Button)`
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  padding: 20px 0;
  width: 181px;
  border: 1px solid var(--green);

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
    }
    &:last-child {
      border-radius: 0 0 10px 10px!important;
      border-top: none;
      border-left: 1px solid var(--green);
    }
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

  @media only screen and ${device.laptop} {
    grid-template-columns: 1fr auto;
    grid-template-areas: 
    'title title'
    'street house'
    'office entrance'
    'level level'
    'comment comment';
  }

  @media only screen and ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'title'
    'street'
    'house'
    'office'
    'entrance'
    'level'
    'comment';
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

export const AddressDelivery: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [street, setStreet] = React.useState<string>('');
  const [house, setHouse] = React.useState<string>('');
  const [office, setOffice] = React.useState<string>('');
  const [entrance, setEntrance] = React.useState<string>('');
  const [level, setLevel] = React.useState<string>('');
  const [comment, setComment] = React.useState<string>('');
  const {address} = useAppSelector((state) => state.addressReducer);

  const deliveryArr = [
    {id: 0, name: 'Доставка'},
    {id: 1, name: 'Самовывоз'}
  ];

  console.log(street, house, office);

  const variants = {
    open: {opacity: 1, height: 'auto'},
    closed: {opacity: 0, height: 0}
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
              onClick={() => setActiveIndex(index)}
            >
              {d.name}
            </StyledBtn>
          )}
        </StyledChoose>
        <Time
          align={'center'}
          animate={activeIndex === 0 ? 'open' : 'closed'}
          initial={'closed'}
          exit={'closed'}
          variants={variants}
        >
          {activeIndex === 0 &&
            <>
              <ClockIcon/>
              <Span size={16} weight={500}>Доставим через  1 час 30 минут</Span>
            </>
          }
        </Time>
      </StyledDeliveryBlock>
      <AnimatePresence>
        {activeIndex === 0 &&
           <Address
             animate={activeIndex === 0 ? 'open' : 'closed'}
             initial={'closed'}
             exit={'closed'}
             variants={variants}
             transition={{
               damping: 20,
               type: 'spring',
               stiffness: 260,
             }}
           >
             <Title size={16}>Адрес доставки</Title>
             <StreetInput
               placeholder='Укажите улицу'
               type='text'
               defaultValue={address.street && address.settlement_with_type != null ?
                 `${address.settlement_with_type}, ${address.street_type} ${address.street}` :
                 address.street &&
                 `${address.street_type} ${address.street}`}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
             />
             <HouseInput
               placeholder='№ дома'
               type='text'
               defaultValue={address.house && `${address.house_type} ${address.house}`}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setHouse(e.target.value)}
             />
             <OfficeInput
               placeholder='№ квартиры/офиса'
               type='text'
               defaultValue={address.flat && `${address.flat_type} ${address.flat}`}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setOffice(e.target.value)}
             />
             <EntranceInput
               placeholder='Подъезд'
               type='text'
               value={entrance}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setEntrance(e.target.value)}
             />
             <LevelInput
               placeholder='Этаж'
               type='text'
               value={level}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setLevel(e.target.value)}
             />
             <CommentInput
               placeholder='Комментарий'
               type='text'
               value={comment}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
             />
           </Address>
        }
      </AnimatePresence>
    </DeliveryBlock>
  );
};
