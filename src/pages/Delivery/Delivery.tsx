import React, {useState} from 'react';
import {ContactInfo} from './ContactInfo/ContactInfo';
import {AddressDelivery} from './AddressDelivery/AddressDelivery';
import {PayDelivery} from './Pay/PayDelivery';
import {H1} from '../../styles/components';
import {device} from '../../styles/breakpoints';
import {setActiveNav} from '../../redux/reducers/NavSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {Checkout} from './Checkout/Checckout';
import {setOrder} from '../../redux/reducers/OrderSlice';
import {IAddressDeliveryInterfaces} from './AddressDelivery/AddressDelivery.interfaces';
import {setResetCart} from '../../redux/reducers/CartSlice';
import styled from 'styled-components';

const Wrapper = styled(FormProvider)`
  margin: 0 auto;
  width: 840px;
  padding: 0 20px;
  @media only screen and ${device.laptop} {
    width: 100%;
  }
`;

// const Block = styled.div`
//   background: #2B2829!important;
//   width: 100%;
//   border-radius: 10px;
//   padding: 20px 30px;
// `;

// const StyledImage = styled(Img)``;

const Title = styled(H1)`
  margin-bottom: 40px;
  padding-left: 20px;
  border-left: 4px solid var(--green);
  margin-top: 40px;

  @media only screen and ${device.laptop} {
  }
  
  @media only screen and ${device.tablet} {
    margin-left: 0;
  }
`;

export const Delivery: React.FC = (): JSX.Element => {
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [error, setError] = useState<string>();
  const {cart} = useAppSelector((state) => state.cartReducer);
  const {order} = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm({mode: 'onChange'});

  const onSubmit: SubmitHandler<any> = (data: IAddressDeliveryInterfaces) => {
    try {
      dispatch(setOrder(data));
      methods.reset({
        name: '',
        phone: '',
        street: '',
        house: '',
        entrance: '',
        level: '',
        comment: '',
        office: '',
        check: false
      });
      dispatch(setResetCart());
      navigate('/');
    } catch (e: any) {
      setError(e.message);
    }
  };

  console.log(error);

  const resizeWindow = () => {
    setScreenWidth(window.innerWidth);
  };

  React.useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  React.useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
      dispatch(setActiveNav(0));
    }
  }, []);

  console.log(order);

  return (
    <Wrapper {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* <Block>*/}
        {/*  <StyledImage src={'./assets/night.png'} alt={'night'}/>*/}
        {/* </Block>*/}
        <Title size={32}>Оформление заказа</Title>
        <ContactInfo/>
        <AddressDelivery screenWidth={screenWidth}/>
        <PayDelivery screenWidth={screenWidth}/>
        <Checkout/>
      </form>
    </Wrapper>
  );
};
