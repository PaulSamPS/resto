import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ProductInterface} from '../../interfaces/product.interface';
import axios from 'axios';
import {Nav} from '../../components/Nav/Nav';
import {CardInfo} from '../../components/CardInfo/CardInfo';
import {ProductBlock} from '../../components/ProductBlock/ProductBlock';
import {ReactComponent as ArrowIcon} from './Icons/arrow.svg';
import {Span} from '../../components/Span/Span';
import styles from './ProductInfo.module.scss';
import {Button} from '../../components/Button/Button';

export const ProductInfo = () => {
  const [product, setProduct] = React.useState<ProductInterface | null>(null);
  const [products, setProducts] = React.useState<ProductInterface[]>([]);
  const {id} = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const apiGet = async () => {
      const res = await axios.get<ProductInterface[]>('/api/products');
      setProducts(res.data);
    };
    apiGet();
  }, [id]);

  React.useEffect(() => {
    axios.get<ProductInterface>(`/api/products/${id}`).then((r) => {
      setProduct(r.data);
    });
  }, [id]);

  return (
    <div className={styles.productInfo}>
      <Nav/>
      <Button className={styles.back} onClick={() => navigate('/')}>
        <div className={styles.icon}>
          <ArrowIcon/>
        </div>
        <Span size={'l'}>Вернуться назад</Span>
      </Button>
      <CardInfo product={product}/>
      <ProductBlock products={products} title={'С этим товаром покуппают'} filter={'Напитки'}/>
    </div>
  );
};

