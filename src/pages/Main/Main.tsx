import React from 'react';
import {Card} from '../../components/Card/Card';
import axios from 'axios';
import {ProductInterface} from '../../interfaces/product.interface';
import {Slider} from '../../components/Slider/Slider';
import {H} from '../../components/H/H';
import {Spinner} from '../../components/Spinner/Spinner';
import {Nav} from '../../components/Nav/Nav';
import styles from './Main.module.scss';

export const Main: React.FC = (): JSX.Element => {
  const [products, setProducts] = React.useState<ProductInterface[]>([]);
  const [loading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const apiGet = async () => {
      const res = await axios.get<ProductInterface[]>('http://localhost:3001/products');
      setProducts(res.data);
    };
    apiGet();
  }, []);

  return (
    <div className={styles.main}>
      <Slider/>
      <Nav/>
      <div className={styles.meatDishes}>
        <H size={'h1'} className={styles.title}>Горячие блюда</H>
        <div className={styles.productBlock}>
          {loading ?
            <Spinner/> :
              products.map((p) => <Card key={p.id} product={p}/>)
          }
        </div>
      </div>
    </div>
  );
};

