import React from 'react';
import {CardProps} from './Card.props';
import cn from 'classnames';
import {Span} from '../Span/Span';
import {Button} from '../Button/Button';
import {H} from '../H/H';
import {P} from '../P/P';
import {ReactComponent as BuyIcon} from './Icons/buy.svg';
import {ReactComponent as MinusIcon} from './Icons/minus.svg';
import {ReactComponent as PlusIcon} from './Icons/plus.svg';
import styles from './Card.module.scss';
import {Link} from 'react-router-dom';

export const Card: React.FC<CardProps> = ({className, product}): JSX.Element => {
  const [addToCart, setAddToCart] = React.useState<boolean>(false);

  return (
    <div className={cn(styles.card, className)}>
      <Link to={`/${product.id}`}><img src={product.image} alt={product.name}/></Link>
      <div className={styles.info}>
        <div className={styles.top}>
          <H size={'h3'}>{product.name}</H>
          <Span size={'s'}>Вес: {product.weight} г</Span>
        </div>
        <P className={styles.desc} size={'m'}>{product.description}</P>
        {addToCart ?
        <div className={styles.bottom}>
          <Button>
            <MinusIcon />
          </Button>
          <Span size={'l'}>{product.price} ₽</Span>
          <Button>
            <PlusIcon />
          </Button>
        </div> :
        <div className={styles.bottom}>
          <Span size={'l'}>{product.price} ₽</Span>
          <Button
            className={styles.btn}
            onClick={() => setAddToCart(true)}
          >
            В корзину
            <BuyIcon />
          </Button>
        </div>
        }
      </div>
      <div className={styles.count}>3</div>
    </div>
  );
};

