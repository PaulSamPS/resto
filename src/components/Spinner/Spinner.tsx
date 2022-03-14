import React from 'react';
import {SpinnerProps} from './Spinner.props';
import styled from 'styled-components';

const StyledSpinner = styled.div<{h?: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({h}) => h};
  &::after {
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    content: " ";
    animation: ldsDualRing 1.2s linear infinite;
    border: 6px solid var(--tetxGray);
    border-color: var(--tetxGray) transparent var(--tetxGray) transparent;
    border-radius: 50%;
  }

  @keyframes ldsDualRing {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner: React.FC<SpinnerProps> = ({mHeight}): JSX.Element => {
  return (
    <StyledSpinner h={mHeight}/>
  );
};
