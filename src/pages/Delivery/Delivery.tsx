import React from 'react';
import {ContactInfo} from './ContactInfo/ContactInfo';
import {AddressDelivery} from './AddressDelivery/AddressDelivery';
import {PayDelivery} from './Pay/PayDelivery';
import styled from 'styled-components';
import {H1, Img} from '../../styles/components';
import {device} from '../../styles/breakpoints';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 840px;
  padding: 0 20px;
  @media only screen and ${device.laptop} {
    width: 100%;
  }
`;

const Block = styled.div`
  background: #2B2829!important;
  width: 100%;
  border-radius: 10px;
  padding: 20px 30px;
`;

const StyledImage = styled(Img)``;

const Title = styled(H1)`
  margin-bottom: 40px;
  padding-left: 20px;
  border-left: 4px solid var(--green);

  @media only screen and ${device.laptop} {
    margin-top: 16px;
  }
  
  @media only screen and ${device.tablet} {
    margin-left: 0;
  }
`;

export const Delivery: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Block>
        <StyledImage src={'./assets/night.png'} alt={'night'}/>
      </Block>
      <Title size={32}>Оформление заказа</Title>
      <ContactInfo/>
      <AddressDelivery/>
      <PayDelivery/>
    </Wrapper>
  );
};
