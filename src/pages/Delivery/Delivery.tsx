import React from 'react';
import {ContactInfo} from './ContactInfo/ContactInfo';
import {AddressDelivery} from './AddressDelivery/AddressDelivery';
import {PayDelivery} from './Pay/PayDelivery';
import {H1} from '../../styles/components';
import {device} from '../../styles/breakpoints';
import {Checkout} from './Checkout/Checckout';
import {setActiveNav} from '../../redux/reducers/NavSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  const {cart} = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  window.addEventListener('resize', function() {
    setScreenWidth(window.innerWidth);
  });

  React.useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
      dispatch(setActiveNav(0));
    }
  }, []);

  return (
    <Wrapper>
      {/* <Block>*/}
      {/*  <StyledImage src={'./assets/night.png'} alt={'night'}/>*/}
      {/* </Block>*/}
      <Title size={32}>Оформление заказа</Title>
      <ContactInfo/>
      <AddressDelivery screenWidth={screenWidth}/>
      <PayDelivery screenWidth={screenWidth}/>
      <Checkout/>
    </Wrapper>
  );
};
