import React from 'react';
import cn from 'classnames';
import {DotsProps} from './Dots.props';
import styles from './Dots.module.scss';

export const Dots: React.FC<DotsProps> = ({slideIndex, dots, arr, className, ...props}): JSX.Element => {
  const [dotsArray, setDotsArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructDots = (slideIndex: number) => {
    const updateDots = arr.map((dot: JSX.Element, index) => {
      return (
        <button key={index} onClick={() => dots(index)}>
          <span className={cn(styles.dots, {
            [styles.active]: slideIndex === index,
          })}/>
        </button>
      );
    });
    setDotsArray(updateDots);
  };

  React.useEffect(() => {
    constructDots(slideIndex);
  }, [slideIndex]);

  return (
    <div className={cn(styles.dots, className)} {...props}>
      {dotsArray.map((dots, index) => <span key={index}>{dots}</span>)}
    </div>
  );
};

