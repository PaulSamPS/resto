import React, {ForwardedRef, forwardRef} from 'react';
import styled from 'styled-components';
import {InputS, Span} from '../../styles/components';
import {InputProps} from './Input.props';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled(InputS)`
  width: 100%;
`;

const ErrorSpan = styled(Span)`
  position: absolute;
  top: -18px;
  left: 0;
  color: orangered;
`;

export const Input = forwardRef(({error, placeholder, type, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <Wrapper>
      <StyledInput ref={ref} placeholder={placeholder} type={type}/>
      {error && <ErrorSpan size={14}>{error.message}</ErrorSpan>}
    </Wrapper>
  );
});
Input.displayName = 'Input';
