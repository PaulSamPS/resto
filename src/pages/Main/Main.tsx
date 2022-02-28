import React from 'react';
import {Card} from '../../components/Card/Card';
import axios from 'axios';
import {ProductInterface} from '../../interfaces/product.interface';
import {Slider} from '../../components/Slider/Slider';
import styles from './Main.module.scss';

export const Main: React.FC = (): JSX.Element => {
  const [products, setProducts] = React.useState<ProductInterface[]>([]);

  React.useEffect(() => {
    const apiGet = async () => {
      const res = await axios.get<ProductInterface[]>('http://localhost:3001/products');
      setProducts(res.data);
    };
    apiGet();
  }, []);

  return (
    <div className={styles.main}>
      <Slider />
      <div className={styles.productBlock}>
        {products.map((p) => <Card key={p.id} product={p}/>)}
      </div>
    </div>
  );
};

