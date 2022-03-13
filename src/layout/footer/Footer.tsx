import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--footerGradient);
  margin-top: 80px;
  padding: 24px 80px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  color: var(--tetxGray);
  text-decoration: none;
  margin-left: 40px;
  transition: color ease .2s;

  &:hover {
    color: var(--textWhite);
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

