import React from 'react';
import {useParams} from 'react-router-dom';
import {ProductInterface} from '../../interfaces/product.interface';
import axios from 'axios';
import {Nav} from '../../components/Nav/Nav';
import {CardInfo} from '../../components/CardInfo/CardInfo';
import styles from './ProductInfo.module.scss';

export const ProductInfo = () => {
  const [products, setProducts] = React.useState<ProductInterface | null>(null);
  const {id} = useParams();

  React.useEffect(() => {
    axios.get<ProductInterface>(`http://localhost:3001/products/${id}`).then((r) => {
      setProducts(r.data);
    });
  }, [id]);

  console.log(products);
  return (
    <div className={styles.productInfo}>
      <Nav/>
      <CardInfo product={products}/>
    </div>
  );
};

