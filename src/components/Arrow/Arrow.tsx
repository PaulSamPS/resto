import React from 'react';
import {ReactComponent as ArrowLogo} from './Icons/arrow.svg';
import {ArrowProps} from './Arrow.props';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  width: 60px;
  height: 50px;
  cursor: pointer;
  transition: all ease 0.3s;
  border: 0;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.7);

  svg {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    transition: all ease 0.2s;
  }
  
  &:hover {
    svg {
      fill: var(--darkBrown) !important;
    }
  }
`;

const ArrowLeft = styled(Button)`
  z-index: 999;
  top: calc(55.5% - 40px);
  left: -30px;
  transform: rotate(180deg);
`;

const ArrowRight = styled(Button)`
  z-index: 999;
  top: calc(55.5% - 40px);
  right: -30px;
`;


export const Arrow: React.FC<ArrowProps> = ({appearance}): JSX.Element => {
  return (
    <>
      {appearance === 'left' ?
        <ArrowLeft>
          <ArrowLogo/>
        </ArrowLeft> :
        <ArrowRight>
          <ArrowLogo/>
        </ArrowRight>
      }
    </>
  );
};
