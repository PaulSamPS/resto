import React from 'react';
import styles from './ProductBlock.module.scss';
import {H} from '../H/H';
import {Card} from '../Card/Card';
import {ProductsBlockProps} from './ProductsBlock.props';

export const ProductBlock: React.FC<ProductsBlockProps> = ({children, products, ...props}) => {
  return (
    <div className={styles.wrapper}>
      <H size={'h1'} className={styles.title}>{products.map((p) => p.category)[0]}</H>
      <div className={styles.productBlock}>
        {/* {products.map((p) => <Card key={p.id} product={p}/>)}*/}
        {products.map((p) => <Card key={p.id} product={p}/>)}
      </div>
    </div>
  );
};

