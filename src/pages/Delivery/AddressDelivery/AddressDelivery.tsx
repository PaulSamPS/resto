import React from 'react';
import {Button, Flex, H2, Input, InputCss, Span} from '../../../styles/components';
import {ReactComponent as ClockIcon} from './Icons/clock.svg';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {AnimatePresence, motion} from 'framer-motion';
import {AddressSuggestions, DaDataAddress, DaDataSuggestion} from 'react-dadata';
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

const Time = styled(motion.div)`
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

// const StreetInput = styled(Input)`
//   grid-area: street;
// `;

const Street = styled.div`
  grid-area: street;
  input {
    ${InputCss};
  }
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
  const [street, setStreet] = React.useState<DaDataSuggestion<DaDataAddress> | undefined>();

  const deliveryArr = [
    {id: 0, name: 'Доставка'},
    {id: 1, name: 'Самовывоз'}
  ];

  const variants = {
    open: {opacity: 1, y: 0, height: 'auto'},
    closed: {opacity: 0, y: '-10%', height: 0}
  };

  const variantsTime = {
    open: {opacity: 1, y: 0},
    closed: {opacity: 0, y: '-50%'},
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
          <Time
            align={'center'}
            animate={activeIndex === 0 ? 'open' : 'closed'}
            initial={'closed'}
            variants={variantsTime}
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
               <Street>
                 <AddressSuggestions
                   value={street}
                   onChange={setStreet}
                   inputProps={{placeholder: 'Укажите улицу'}}
                   token={`${process.env.REACT_APP_API_KEY}`}
                   filterLocations={[{city: 'Оренбург'}]}
                   filterFromBound={'street'}
                   filterToBound={'street'}
                 />
               </Street>
               <HouseInput placeholder='№ дома' type='text'/>
               <OfficeInput placeholder='№ квартиры/офиса' type='text'/>
               <EntranceInput placeholder='Подъезд' type='text'/>
               <LevelInput placeholder='Этаж' type='text'/>
               <CommentInput placeholder='Комментарий' type='text'/>
             </Address>
          }
        </AnimatePresence>
      </StyledDelivery>
    </DeliveryBlock>
  );
};
