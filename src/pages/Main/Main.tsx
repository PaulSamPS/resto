import React from 'react';
import {Card} from '../../components/Card/Card';
import axios from 'axios';
import {ProductInterface} from '../../interfaces/product.interface';

export const Main: React.FC = () => {
  const [products, setProducts] = React.useState<ProductInterface[]>([]);

  React.useEffect(() => {
    const apiGet = async () => {
      const res = await axios.get<ProductInterface[]>('http://localhost:3001/products');
      setProducts(res.data);
    };
    apiGet();
  }, []);

  console.log(products);

  return (
    <div>
      <Card />
    </div>
  );
};

