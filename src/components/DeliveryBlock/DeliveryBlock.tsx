import React from 'react';
import {DeliveryBlockProps} from './DeliveryBlock.props';
import {motion} from 'framer-motion';
import {device} from '../../styles/breakpoints';
import styled from 'styled-components';

const Wrapper = styled(motion.div)<{width: number}>`
  background: var(--brown);
  width: ${({width}) => width}%;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 90px;
  }
  
  @media only screen and ${device.laptop} {
    padding: 20px;
  }
  
  @media only screen and ${device.tablet} {
    &:last-child {
      margin-bottom: 50px;
    }
  }
`;

export const DeliveryBlock: React.FC<DeliveryBlockProps> = ({children, width}): JSX.Element => {
  return (
    <Wrapper
      width={width}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
    >
      {children}
    </Wrapper>
  );
};

