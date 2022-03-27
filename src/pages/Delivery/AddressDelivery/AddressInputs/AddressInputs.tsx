import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {AddressInputsProps} from './AddressInputs.props';
import {FormInputBlock, H2, InputS, Span} from '../../../../styles/components';
import {useAppSelector} from '../../../../hooks/redux';
import {device} from '../../../../styles/breakpoints';
import {useFormContext} from 'react-hook-form';
import {IAddressDeliveryInterfaces} from '../AddressDelivery.interfaces';
import styled from 'styled-components';

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 20px;
  grid-area: title;

  @media only screen and ${device.tablet} {
    font-size: 16px;
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

const FormInputStreet = styled(FormInputBlock)`
  grid-area: street;
`;

const FormInputHouse = styled(FormInputBlock)`
  grid-area: house;
`;

const FormInputOffice = styled(FormInputBlock)`
  grid-area: office;
`;

const FormInputEntrance = styled(FormInputBlock)`
  grid-area: entrance;
`;

const FormInputLevel = styled(FormInputBlock)`
  grid-area: level;
`;

const FormInputComment = styled(FormInputBlock)`
  grid-area: comment;
`;

const StyledInput = styled(InputS)``;

export const AddressInputs: React.FC<AddressInputsProps> = ({activeIndex}): JSX.Element => {
  const {address} = useAppSelector((state) => state.addressReducer);
  const {register, formState: {errors}} = useFormContext<IAddressDeliveryInterfaces>();

  const variants = {
    open: {opacity: 1, height: 'auto'},
    closed: {opacity: 0, height: 0}
  };

  return (
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
          <FormInputStreet>
            <StyledInput
              {...register('street', {required: {value: true, message: 'Укажите улицу'}})}
              placeholder='Укажите улицу*'
              type='text'
              defaultValue={address.street && address.settlement_with_type != null ?
                `${address.settlement_with_type}, ${address.street_type} ${address.street}` :
                address.street &&
                `${address.street_type} ${address.street}`}
            />
            {errors.street && <Span size={12}>{errors.street.message}</Span>}
          </FormInputStreet>
          <FormInputHouse>
            <StyledInput
              {...register('house', {required: {value: true, message: 'Укажите номер дома'}})}
              placeholder='№ дома*'
              type='text'
              defaultValue={address.house && `${address.house_type} ${address.house}`}
            />
            {errors.house && <Span size={12}>{errors.house.message}</Span>}
          </FormInputHouse>
          <FormInputOffice>
            <StyledInput
              {...register('office')}
              placeholder='№ квартиры/офиса'
              type='text'
              defaultValue={address.flat && `${address.flat_type} ${address.flat}`}
            />
          </FormInputOffice>
          <FormInputEntrance>
            <StyledInput
              {...register('entrance')}
              placeholder='Подъезд'
              type='text'
            />
          </FormInputEntrance>
          <FormInputLevel>
            <StyledInput
              {...register('level')}
              placeholder='Этаж'
              type='text'
            />
          </FormInputLevel>
          <FormInputComment>
            <StyledInput
              {...register('comment')}
              placeholder='Комментарий'
              type='text'
            />
          </FormInputComment>
        </Address>
      }
    </AnimatePresence>
  );
};
