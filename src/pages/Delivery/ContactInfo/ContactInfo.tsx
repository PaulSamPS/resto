import React from 'react';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {FormInputBlock, H2, InputS, Span} from '../../../styles/components';
import {device} from '../../../styles/breakpoints';
import styled from 'styled-components';
import {useFormContext} from 'react-hook-form';
// import {IAddressDeliveryInterfaces} from '../AddressDelivery/AddressDelivery.interfaces';
import {IAddressDeliveryInterfaces} from '../AddressDelivery/AddressDelivery.interfaces';

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 20px;

  @media only screen and ${device.tablet} {
    font-size: 16px;
  }
`;

const StyledContactInfo = styled.div`
  display: grid;
  grid-template-columns: 363px 363px;
  column-gap: 15px;

  @media only screen and ${device.laptop} {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 15px;
  }
`;

const FormInput = styled(FormInputBlock)``;

const StyledInput = styled(InputS)`
  width: 100%;
`;

export const ContactInfo: React.FC = (): JSX.Element => {
  const {register, formState: {errors}} = useFormContext<IAddressDeliveryInterfaces>();

  return (
    <DeliveryBlock width={100}>
      <Title size={18}>1. Контактная информация</Title>
      <StyledContactInfo>
        <FormInput>
          <StyledInput
            {...register('name', {
              required: {value: true, message: 'Введите имя'},
              pattern: {
                value: /^[а-яА-яЁё]+$/,
                message: 'Только буквы русского алфавита без пробела'
              }
            })}
            placeholder='Имя*'
            type='text'
          />
          {errors.name && <Span size={12}>{errors.name.message}</Span>}
        </FormInput>
        <FormInput>
          <StyledInput
            {...register('phone', {
              required: {value: true, message: 'Введите номер телефона'},
              pattern: {
                value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                message: 'Некорректный номера телефона'
              }
            })}
            placeholder='Телефон*'
            type='tel'
          />
          {errors.phone && <Span size={12}>{errors.phone.message}</Span>}
        </FormInput>
      </StyledContactInfo>
    </DeliveryBlock>
  );
};
