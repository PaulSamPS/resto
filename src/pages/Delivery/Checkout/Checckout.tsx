import React, {ChangeEvent} from 'react';
import {DeliveryBlock} from '../../../components/DeliveryBlock/DeliveryBlock';
import {Button, Flex, Span, StyledA} from '../../../styles/components';
import {device} from '../../../styles/breakpoints';
import CheckedIcon from './Icons/checked.png';
import styled from 'styled-components';
import {useFormContext} from 'react-hook-form';
import {IAddressDeliveryInterfaces} from '../AddressDelivery/AddressDelivery.interfaces';
import {useLocation, useNavigate} from 'react-router-dom';

const Wrapper = styled.div`
  ${Flex};

  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'btn' 'cond';
    row-gap: 15px;
  }
`;

const Conditions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  position: relative;

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  > label {
    display: inline-flex;
    align-items: center;
    user-select: none;

    &:before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      flex-grow: 0;
      flex-shrink: 0;
      border-radius: 10px;
      background: var(--textWhite);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  }

  > input:checked + label {
    &:before {
      background-image: url(${CheckedIcon});
    }
  }

  @media only screen and ${device.tablet} {
    grid-area: cond;
  }
`;

const ConditionsText = styled.div`
  
  a {
    border-bottom: 1px solid var(--green);
    display: inline-block;
  }

  @media only screen and ${device.mobileL} {
    a {
      font-size: 10px;
    }
  }
`;

const StyledInput = styled.input`
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const SpanError = styled(Span)`
  position: absolute;
  top: -20px;
  left: 0;
  
  color: orangered;
`;

const StyledLabel = styled.label`
  color: var(--textWhite);
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  user-select: none;
  

  @media only screen and ${device.mobileL} {
    font-size: 10px;
  }
`;

const StyledSpan = styled(Span)`
  grid-area: btn;
  margin-right: 5px;
  white-space: unset;
  @media only screen and ${device.mobileL} {
    font-size: 10px;
  }
`;

const StyledBtn = styled(Button)`
  padding: 20px 50px;
  justify-self: center;
`;

export const Checkout: React.FC = () : JSX.Element => {
  const [check, setCheck] = React.useState<boolean>(false);
  const {register, formState: {errors}} = useFormContext<IAddressDeliveryInterfaces>();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCheck = React.useCallback((e: ChangeEvent) => {
    setCheck(!check);
  }, [check]);

  if (location.pathname !== '/delivery') {
    navigate('/');
  }

  return (
    <DeliveryBlock width={100}>
      <Wrapper align={'center'} justify={'space-between'}>
        <Conditions>
          <StyledInput
            {...register('check', {required: {value: true, message: 'Вы должны принять соглашение'}})}
            type={'checkbox'}
            checked={check}
            onChange={handleCheck}
          />
          <StyledLabel htmlFor={'checkbox'}/>
          {errors.check && <SpanError size={12}>{errors.check.message}</SpanError>}
          <ConditionsText>
            <StyledSpan size={13}>Я согласен на обработку моих перс. данных в соответствии с</StyledSpan>
            <StyledA size={13} linkColor={'#72A479'}> Условиями</StyledA>
          </ConditionsText>
        </Conditions>
        <StyledBtn type={'submit'}>Оформить заказ</StyledBtn>
      </Wrapper>
    </DeliveryBlock>
  );
};
