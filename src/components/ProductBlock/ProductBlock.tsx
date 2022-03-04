import React from 'react';
import styles from './ProductBlock.module.scss';
import {H} from '../H/H';
import {Card} from '../Card/Card';
import {ProductsBlockProps} from './ProductsBlock.props';

export const ProductBlock: React.FC<ProductsBlockProps> = ({children, products, title, filter, ...props}) => {
  return (
    <div className={styles.wrapper}>
      <H size={'h1'} className={styles.title}>{title}</H>
      <div className={styles.productBlock}>
        {/* {products.map((p) => <Card key={p.id} product={p}/>)}*/}
        {products.filter((el) => el.category == filter).map((p) => <Card key={p.id} product={p}/>)}
      </div>
    </div>
  );
};

