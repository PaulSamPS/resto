import React from 'react';
import {DotsProps} from './Dots.props';
import styled from 'styled-components';
import {Flex} from '../../styles/components';

interface IStyledDots {
  activeBackground: boolean;
  activePadding: boolean;
}

const ButtonDots = styled.button`
  ${Flex};
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
`;

const StyledDots = styled.span<IStyledDots>`
  display: block;

  border-radius: 50%;
  background: ${({activeBackground}) => activeBackground ? '#618967' :'#CFCFCF'};
  padding: ${(activePadding) => activePadding ? '3px' : '2px'};
`;

const DotsWrapper = styled.div`
  ${Flex};
`;

export const Dots: React.FC<DotsProps> = ({slideIndex, dots, arr}): JSX.Element => {
  const [dotsArray, setDotsArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructDots = (slideIndex: number) => {
    const updateDots = arr.map((dot: JSX.Element, index) => {
      return (
        <ButtonDots justify={'center'} align={'center'} key={index} onClick={() => dots(index)}>
          <StyledDots
            activeBackground={slideIndex === index}
            activePadding={slideIndex === index}
          />
        </ButtonDots>
      );
    });
    setDotsArray(updateDots);
  };

  React.useEffect(() => {
    constructDots(slideIndex);
  }, [slideIndex]);

  return (
    <DotsWrapper>
      {dotsArray.map((dots, index) => <span key={index}>{dots}</span>)}
    </DotsWrapper>
  );
};

