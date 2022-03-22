import React from 'react';
import {DeliveryBlockProps} from './DeliveryBlock.props';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled(motion.div)<{width: number}>`
  background: var(--brown);
  width: ${({width}) => width}px;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
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

