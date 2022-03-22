import React from 'react';
import {Link} from 'react-router-dom';
import {device} from '../../styles/breakpoints';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--footerGradient);
  padding: 24px 80px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: auto;
  
  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    row-gap: 10px;
    padding: 24px 0;
  }
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: var(--tetxGray);
  text-decoration: none;
  margin-left: 40px;
  transition: color ease .2s;

  &:hover {
    color: var(--textWhite);
  }

  @media only screen and ${device.laptopL} {
    font-size: 14px;
  }

  @media only screen and ${device.tablet} {
    margin-left: 0;
  }
`;

export const Footer: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <StyledLink to={'#'}>О ресторане</StyledLink>
      <StyledLink to={'#'}>Условия доставки</StyledLink>
      <StyledLink to={'#'}>Возврат товара</StyledLink>
      <StyledLink to={'#'}>Акции</StyledLink>
    </Wrapper>
  );
};

