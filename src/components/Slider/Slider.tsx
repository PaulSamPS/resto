import React from 'react';
import axios from 'axios';
import {ISlider} from '../../interfaces/slider.interface';
import {Dots} from '../Dots/Dots';
import {Arrow} from '../Arrow/Arrow';
import styles from './Slider.module.scss';

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
      const res = await axios.get<ISlider[]>('http://localhost:3001/slider');
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
    <div className={styles.wrapper}>
      <div className={styles.sliderBlock}>
        {slider.map((s) =>
          <div
            className={styles.slider}
            key={s.id}
            style={{transform: `translateX(${offset}px)`}}
          >
            <img
              key={s.id}
              src={s.image}
              alt={s.name}
            />,
          </div>,
        )}
        <Arrow appearance={'left'} onClick={prevSlide}/>
        <Arrow appearance={'right'} onClick={nextSlide}/>
      </div>
      <div className={styles.dots}>
        <Dots slideIndex={slideIndex} dots={handleDots} arr={slider}/>
      </div>
    </div>
  );
};

