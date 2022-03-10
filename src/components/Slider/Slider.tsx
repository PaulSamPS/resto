import React from 'react';
import {ISlider} from '../../interfaces/slider.interface';
import {Dots} from '../Dots/Dots';
import {Arrow} from '../Arrow/Arrow';
import {Flex} from '../../styles/components';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SliderBlock = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;

  width: 1440px;
  height: 484px;

  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    button {
      svg {
        fill: var(--green);
      }
    }
  }
`;

const StyledSlider = styled.div<{offset: number}>`
  width: 1440px;
  height: 484px;

  transition: all ease 1s;
  text-align: center;
  transform: translateX(${(props) => props.offset}px);
`;

const Image = styled.img`
  width: 1440px;
  height: 484px;
  object-fit: cover;
`;

const StyledDots = styled.div`
  position: unset;
  right: 270px;
  bottom: -30px;

  ${Flex};

  height: 30px;
`;

export const Slider: React.FC = (): JSX.Element => {
  const [slider, setSlider] = React.useState<ISlider[]>([]);
  const [offset, setOffset] = React.useState<number>(0);
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const IMG_WIDTH = 1440;

  const nextSlide = () => {
    if (slideIndex === slider.length - 1) {
      setSlideIndex(0);
      setOffset(0);
    } else {
      setOffset((currentOffset: number) => {
        return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (slider.length - 1)));
      });
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    setOffset((currentOffset: number) => {
      console.log(currentOffset);
      return Math.min(currentOffset + IMG_WIDTH, 0);
    });
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
  };

  const handleDots = (index: number) => {
    setSlideIndex(index);
    setOffset(-(index * IMG_WIDTH));
  };

  React.useEffect(() => {
    const apiGet = async () => {
      const res = await axios.get<ISlider[]>('/api/slider');
      setSlider(res.data);
    };
    apiGet();
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === slider.length - 1) {
        setSlideIndex(0);
        setOffset(0);
      } else {
        setOffset((currentOffset: number) => {
          return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (slider.length)));
        });
        setSlideIndex((slideIndex) => slideIndex +1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <Wrapper>
      <SliderBlock>
        {slider.map((s) =>
          <StyledSlider offset={offset} key={s.id}>
            <Image src={s.image} alt={s.name}/>,
          </StyledSlider>
        )}
        <Arrow appearance={'left'} onClick={prevSlide}/>
        <Arrow appearance={'right'} onClick={nextSlide}/>
      </SliderBlock>
      <StyledDots align={'center'} justify={'center'}>
        <Dots slideIndex={slideIndex} dots={handleDots} arr={slider}/>
      </StyledDots>
    </Wrapper>
  );
};

