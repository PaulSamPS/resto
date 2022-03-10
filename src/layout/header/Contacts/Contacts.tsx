import React from 'react';
import {ReactComponent as CallingIcon} from './icons/calling.svg';
import {Flex, Span} from '../../../styles/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Flex};
  gap: 10px;
  margin-left: 40px;
`;

const Icon = styled.div`
  ${Flex};
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform ease 0.2s;
  border-radius: 50%;
  background: var(--green);
  &:hover {
    transform: scale(1.1);
  }
`;

const Phone = styled.div`
  ${Flex};
`;

export const Contacts: React.FC = (): JSX.Element => {
  return (
    <Wrapper align={'center'}>
      <Icon align={'center'} justify={'center'}>
        <CallingIcon/>
      </Icon>
      <Phone direction={'column'}>
        <Span size={12} weight={400} color={'#CFCFCF'}>Контакты:</Span>
        <Span size={14} weight={700}>+7 (912) 345-67-89</Span>
      </Phone>
    </Wrapper>
  );
};
