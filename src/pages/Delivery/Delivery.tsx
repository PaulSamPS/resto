import React from 'react';
import {ContactInfo} from './ContactInfo/ContactInfo';
import {AddressDelivery} from './AddressDelivery/AddressDelivery';
import {PayDelivery} from './Pay/PayDelivery';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Delivery: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <ContactInfo/>
      <AddressDelivery/>
      <PayDelivery/>
    </Wrapper>
  );
};
